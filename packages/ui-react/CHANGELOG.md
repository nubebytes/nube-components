# @nubebytes/ui-react

## 0.16.5

### Patch Changes

- He cambiado el color

## 0.16.4

### Patch Changes

- Remove lgo

## 0.16.3

### Patch Changes

- Bug fix: Fix image element not being found when passed url is empty (placeholder is found but value is valid so it tried to find it)

## 0.16.2

### Patch Changes

- Fix major rendering and useEffect use in react editor

## 0.16.1

### Patch Changes

- Fix duplicated hotkey for editor highlight

## 0.16.0

### Minor Changes

- Add tons of small layer features and fix many bug like initial render bug and layer naming on reload

## 0.15.0

### Minor Changes

- Multiple layer fix, add multiple actions to selected shapes. Add new settings

## 0.14.7

### Patch Changes

- Update layer incremental name not being correctly updated

## 0.14.6

### Patch Changes

- Fix bugged shape update

## 0.14.5

### Patch Changes

- Fix editor change hook not working

## 0.14.4

### Patch Changes

- Fix frame size not getting calculated on page load

## 0.14.3

### Patch Changes

- Fix change detection outside frame not working on angular build. Was working everywhere else

## 0.14.2

### Patch Changes

- Fix canvas not correctly setting up becouse editor on-mount event callback wasn't being called or was called too late

## 0.14.1

### Patch Changes

- Change default layer drawer state

## 0.14.0

### Minor Changes

- Add layer view with drag and drop. Fix minor performance issues

## 0.13.3

### Patch Changes

- Change toast message for read only

## 0.13.2

### Patch Changes

- Fixed variable input changing the cached selectedshapes instead of the current ones

## 0.13.1

### Patch Changes

- Fix wrong inline styles for rich editor

## 0.13.0

### Minor Changes

- Change all the editor ineccesary deprecated property access for getters and single listeners in canvas provider

## 0.12.1

### Patch Changes

- Fix image placeholder tailwind class overriding inline style

## 0.12.0

### Minor Changes

- Remove deprecated call and add new method to get preview image blob

## 0.11.0

### Minor Changes

- Add config option to disable local persistance. Useful when creating your own backend or alternative persistance

## 0.10.0

### Minor Changes

- Update loading screen

## 0.9.0

### Minor Changes

- Add arrow tool

## 0.8.1

### Patch Changes

- Now adding external assets bigger than canvas work. Previously they were added outside the canvas and therefore automatically removed

## 0.8.0

### Minor Changes

- Fix "bug" that prevented unused assets from being removed, weighting a lot in exported snapshot

## 0.7.4

### Patch Changes

- Update html export to scope css stylesheets and correctly apply styles

## 0.7.3

### Patch Changes

- Add ui ids for extenral use like onboardings

## 0.7.2

### Patch Changes

- Fix shapes syn not working on new fetcher

## 0.7.1

### Patch Changes

- Remove logs

## 0.7.0

### Minor Changes

- Update config management and update editor api to include syncShapeValuesMethod

## 0.6.1

### Patch Changes

- Call value resolver for varibale input on load. Just to check if source has change

## 0.6.0

### Minor Changes

- Fix angular build maximum stack error. Changed to vite based build

## 0.5.2

### Patch Changes

- Misc changes for stabler version

## 0.5.1

### Patch Changes

- Fix variables not being updated in text editor. Now they update when a new one is added

## 0.5.0

### Minor Changes

- Update onmount external callback to "remake" editor on canvasSize change. Basically because the external api is mostly about canvas export for the moment

## 0.4.4

### Patch Changes

- Try fixing render on backend is cropping the content on bottom

## 0.4.3

### Patch Changes

- Fix fontface not being added correctly to html export

## 0.4.2

### Patch Changes

- Change ripple effect on collapse handler

## 0.4.1

### Patch Changes

- Temporal revert to global style import until we know how to inject third party styles on template creation. Also we need to inject specific stylesheets to prevent fetching all head styles (for size and conflicts)

## 0.4.0

### Minor Changes

- Fix several bugs when exporting html template
  Fix several styles and conflict issues

## 0.3.4

### Patch Changes

- Change react editor wrapper on angular. Now unmounts based on root

## 0.3.3

### Patch Changes

- Fix chip close button position

## 0.3.2

### Patch Changes

- Fix colors not showing in color widget palette

## 0.3.1

### Patch Changes

- Update all tailwindcss important classes to non-important. The importat clause is handled from config file now

## 0.3.0

### Minor Changes

- Update styles and check angular-react-tailwindcss integration is working

## 0.2.2

### Patch Changes

- Fix floating elements not being applied styles after style scoping (named "world"). Used mutation observer to append class to floating elements

## 0.2.1

### Patch Changes

- Update row class for button group that was conflicting with bootstrap classes

## 0.2.0

### Minor Changes

- Update tailwind classes to be important, needed to override external stylesheets

## 0.1.0

### Minor Changes

- Editor is now functional and ready to use in any react app. Import EditorComponent with library css to use

## 0.0.3

### Patch Changes

- Third change to publish dist folder only

## 0.0.3

### Patch Changes

- Second test change

## 0.0.2

### Patch Changes

- Test change
