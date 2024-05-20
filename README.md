# atlan-query

SQL query runner application.

## Walkthough Video

This video contiains project implementation details with execute queries demo.

## Project Details

Framework: Vue 3
Major Plugins/Packages:

- Monaco Editor - ("@guolao/vue-monaco-editor": "^1.5.1")
- Pinia for state management
- Vuetify as a component library

## The page load time of your application, and how you measured this time.

### Measured using google chrome network tab

|                  |        |
| ---------------- | ------ |
| requests         | 17     |
| transferred      | 2.8 MB |
| resources        | 9.4 MB |
| Finish           | 822 ms |
| DOMContentLoaded | 255 ms |
| Load             | 675 ms |

### Google Chrome Lighthouse

|                          |       |
| ------------------------ | ----- |
| First Contentful Paint   | 1.3 s |
| Largest Contentful Paint | 2.9 s |
| Total Blocking Time      | 50 ms |
| Cumulative Layout Shift  | 0.002 |
| Speed Index              | 1.6 s |

## Any optimisations you did to decrease the load time or increase performance.
