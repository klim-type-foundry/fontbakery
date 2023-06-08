"""Reporter class that renders report as an HTML document."""

import os
import json
from fontbakery.reporters.html import HTMLReporter

PRODUCTION_JS = False


class KlimHtmlReporter(HTMLReporter):
    """Renders a report as a HTML document."""

    def write(self):
        with open(self.output_file, "w", encoding="utf-8") as fh:
            fh.write(self.get_html())
        print(f'A report in HTML format has been saved to "{self.output_file}"')

    def get_html(self) -> str:
        html_path = os.path.join(
            os.path.dirname(os.path.dirname(__file__)),
            "frontend_spa_report",
            "dist",
            "index.html",
        )
        json_data_string = json.dumps(self.getdoc(), sort_keys=True)
        with open(html_path) as f:
            return f"""<script>window.fontBakeryData = {json_data_string};</script>\n{f.read()}"""
