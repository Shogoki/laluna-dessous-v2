
/**
 * @roxi/routify 2.9.0
 * File generated Mon Jan 18 2021 01:01:37 GMT+0100 (Central European Standard Time)
 */

export const __version = "2.9.0"
export const __timestamp = "2021-01-18T00:01:37.863Z"

//buildRoutes
import { buildClientTree } from "@roxi/routify/runtime/buildRoutes"

//imports


//options
export const options = {}

//tree
export const _tree = {
  "name": "root",
  "filepath": "/",
  "root": true,
  "ownMeta": {},
  "absolutePath": "src/pages",
  "children": [
    {
      "isFile": true,
      "isDir": false,
      "file": "[page].svelte",
      "filepath": "/[page].svelte",
      "name": "[page]",
      "ext": "svelte",
      "badExt": false,
      "absolutePath": "/Users/s18344/Documents/Dev/laluna-dessous-v2/app/src/pages/[page].svelte",
      "importPath": "../src/pages/[page].svelte",
      "isLayout": false,
      "isReset": false,
      "isIndex": false,
      "isFallback": false,
      "isPage": true,
      "ownMeta": {},
      "meta": {
        "recursive": true,
        "preload": false,
        "prerender": true
      },
      "path": "/:page",
      "id": "__page",
      "component": () => import('../src/pages/[page].svelte').then(m => m.default)
    },
    {
      "isFile": true,
      "isDir": false,
      "file": "another.svelte",
      "filepath": "/another.svelte",
      "name": "another",
      "ext": "svelte",
      "badExt": false,
      "absolutePath": "/Users/s18344/Documents/Dev/laluna-dessous-v2/app/src/pages/another.svelte",
      "importPath": "../src/pages/another.svelte",
      "isLayout": false,
      "isReset": false,
      "isIndex": false,
      "isFallback": false,
      "isPage": true,
      "ownMeta": {},
      "meta": {
        "recursive": true,
        "preload": false,
        "prerender": true
      },
      "path": "/another",
      "id": "_another",
      "component": () => import('../src/pages/another.svelte').then(m => m.default)
    },
    {
      "isFile": true,
      "isDir": false,
      "file": "index.svelte",
      "filepath": "/index.svelte",
      "name": "index",
      "ext": "svelte",
      "badExt": false,
      "absolutePath": "/Users/s18344/Documents/Dev/laluna-dessous-v2/app/src/pages/index.svelte",
      "importPath": "../src/pages/index.svelte",
      "isLayout": false,
      "isReset": false,
      "isIndex": true,
      "isFallback": false,
      "isPage": true,
      "ownMeta": {},
      "meta": {
        "recursive": true,
        "preload": false,
        "prerender": true
      },
      "path": "/index",
      "id": "_index",
      "component": () => import('../src/pages/index.svelte').then(m => m.default)
    }
  ],
  "isLayout": false,
  "isReset": false,
  "isIndex": false,
  "isFallback": false,
  "meta": {
    "recursive": true,
    "preload": false,
    "prerender": true
  },
  "path": "/"
}


export const {tree, routes} = buildClientTree(_tree)

