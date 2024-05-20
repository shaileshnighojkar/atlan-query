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
| resources        | 9.1 MB |
|                  |        |
| DOMContentLoaded | 667 ms |
| Load             | 975 ms |
| Finish           | 1.03 s |

### Google Chrome Lighthouse

Performance: 79

|                          |       |
| ------------------------ | ----- |
| First Contentful Paint   | 1.3 s |
| Largest Contentful Paint | 2.9 s |
| Total Blocking Time      | 50 ms |
| Cumulative Layout Shift  | 0.002 |
| Speed Index              | 1.6 s |

## Optimizations

- Using tree-shakable editor
  1. monaco-editor: using only sql language package
  2. vuetify: using only required components
- Avoiding unnecessary wrappers used only for css placement purpose - less DOM nodes
- Using shallowRef for large dataset where nested reactivity not required, hence "shallow" ref
- Deployed using amplify to leverage AWS global CDN ie, CloudFront - fast content load.
- Following general vue standard practice to avoid possible performance issues.
