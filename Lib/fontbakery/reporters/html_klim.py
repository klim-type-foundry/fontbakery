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
            "data",
            "vue_frontend",
            "dist",
            "report.html",
        )
        with open(html_path) as f:
            return f"""
              <script>const checkData = {json.dumps(self.getdoc(), sort_keys=True)};</script>
              {f.read()}
            """
        #
        # return f"""
        # <script type="importmap">
        #   {{
        #     "imports": {{
        #       "vue": "https://unpkg.com/vue@3/dist/vue.esm-browser{'.prod' if PRODUCTION_JS else ''}.js"
        #     }}
        #   }}
        # </script>
        #
        # <div id="app">{{{{ message }}}}<br /><br /><pre>{{{{ checkData }}}}</pre></div>
        #
        # <script type="module">
        #   import {{ createApp }} from 'vue';
        #
        #   createApp({{
        #     data() {{
        #       return {{
        #         message: `Hello Font Bakery!`,
        #         checkData: {json.dumps(self.getdoc(), sort_keys=True)}
        #       }}
        #     }}
        #   }}).mount('#app');
        # </script>
        # """
