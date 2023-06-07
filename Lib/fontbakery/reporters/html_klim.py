"""Reporter class that renders report as an HTML document."""

import collections
import json
import html
from typing import List, Dict
import cmarkgfm
from cmarkgfm.cmark import Options as cmarkgfmOptions


from fontbakery.reporters.html import HTMLReporter, EMOTICON, LOGLEVELS
from fontbakery.utils import unindent_and_unwrap_rationale, html5_collapsible

ISSUE_URL = "https://github.com/googlefonts/fontbakery/issues"


class KlimHtmlReporter(HTMLReporter):
    """Renders a report as a HTML document."""

    def write(self):
        with open(self.output_file, "w", encoding="utf-8") as fh:
            fh.write(self.get_html())
        print(f'A report in HTML format has been saved to "{self.output_file}"')

    def get_html(self) -> str:
        """Return complete report as a HTML string."""

        return f"""
        <script type="importmap">
          {{
            "imports": {{
              "vue": "https://unpkg.com/vue@3/dist/vue.esm-browser.js"
            }}
          }}
        </script>

        <div id="app">{{{{ message }}}}<br /><br />{{{{ checkData }}}}</div>

        <script>const checkData = JSON.parse({json.dumps(self.getdoc(), sort_keys=True, indent=4)});</script>

        <script type="module">
          import {{ createApp }} from 'vue'

          createApp({{
            data() {{
              return {{
                message: `Hello Font Bakery!`,
                checkData,
              }}
            }}
          }}).mount('#app')
        </script>
        """
