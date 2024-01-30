import os
import json
from datetime import datetime
from fontbakery.reporters.html import HTMLReporter

PRODUCTION_JS = True


class HtmlAppReporter(HTMLReporter):
    """
    Renders a report as an HTML and JavaScript Application.
    """

    def write(self):
        with open(self.output_file, "w", encoding="utf-8") as fh:
            fh.write(self.get_html())
        print(f'A report in HTML/JS App format has been saved to "{self.output_file}"')

    def getdoc(self):
        doc = super().getdoc()
        doc["datetime"] = datetime.now().strftime("%Y-%m-%dT%H:%M:%S.%f%z")
        doc["outputFile"] = self.output_file
        return doc

    def get_html(self) -> str:
        html_path = os.path.join(
            os.path.dirname(os.path.dirname(__file__)),
            "reporters",
            "html_app_frontend",
            "dist",
            "index.html",
        )
        # Write JSON data to global JS variable, followed by the HTML markup
        doc = self.getdoc()
        try:
            json_data_string = json.dumps(doc, sort_keys=True)
        except TypeError as e:
            line = (
                "\n\n------------------------------------------------------------\n\n"
            )
            print(line)
            print(doc)
            print(line)
            raise e
        with open(html_path, encoding="utf-8") as f:
            return f"""<script>window.fontBakeryData = {json_data_string};</script>\n{f.read()}"""
