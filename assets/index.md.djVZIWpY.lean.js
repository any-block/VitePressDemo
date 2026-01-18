import{_ as a,c as n,j as t,o as s}from"./chunks/framework.B2nqiTxi.js";const u=JSON.parse('{"title":"","description":"","frontmatter":{"layout":"home","hero":{"name":"My Awesome Project","text":"A VitePress Site","tagline":"My great project tagline","actions":[{"theme":"brand","text":"Markdown Examples","link":"/markdown-examples"},{"theme":"alt","text":"API Examples","link":"/api-examples"}]},"features":[{"title":"Feature A","details":"Lorem ipsum dolor sit amet, consectetur adipiscing elit"},{"title":"Feature B","details":"Lorem ipsum dolor sit amet, consectetur adipiscing elit"},{"title":"Feature C","details":"Lorem ipsum dolor sit amet, consectetur adipiscing elit"}]},"headers":[],"relativePath":"index.md","filePath":"index.md"}'),i={name:"index.md"};function o(l,e,r,c,d,b){return s(),n("div",null,[...e[0]||(e[0]=[t("div",{class:"ab-note drop-shadow"},[t("table",{class:"ab-table ab-branch-table"},[t("tbody",null,[t("tr",null,[t("td",{rowspan:"1",col_index:"0",class:"markdown-rendered"},[t("div",null,[t("p",null,"1")])])]),t("tr",null,[t("td",{rowspan:"2",col_index:"0",class:"markdown-rendered"},[t("div",null,[t("p",null,"2")])]),t("td",{rowspan:"1",col_index:"2",class:"markdown-rendered"},[t("div",null,[t("p",null,"3")])])]),t("tr",null,[t("td",{rowspan:"1",col_index:"2",class:"markdown-rendered"},[t("div",null,[t("p",null,"4")])])])])])],-1),t("div",{class:"ab-note drop-shadow"},[t("div",{class:"ab-tab-root"},[t("div",{class:"ab-tab-nav"},[t("button",{class:"ab-tab-nav-item",is_activate:"true",data_index:"0",onclick:`
          const i = 0
          const tab_current = this
          const tab_nav = this.parentNode
          const tab_root = tab_nav.parentNode
          const tab_content = tab_root.querySelector(":scope>.ab-tab-content")
          const tab_nav_items = tab_nav.querySelectorAll(":scope>.ab-tab-nav-item")
          const tab_content_items = tab_content.querySelectorAll(":scope>.ab-tab-content-item")
          for (let j=0; j<tab_content_items.length; j++){
            tab_nav_items[j].setAttribute("is_activate", "false")
            tab_content_items[j].setAttribute("is_activate", "false")
            tab_content_items[j].setAttribute("style", "display:none")
          }
          tab_current.setAttribute("is_activate", "true")
          tab_content_items[i].setAttribute("is_activate", "true")
          tab_content_items[i].setAttribute("style", "display:block")
        `},"1"),t("button",{class:"ab-tab-nav-item",is_activate:"false",data_index:"2",onclick:`
          const i = 1
          const tab_current = this
          const tab_nav = this.parentNode
          const tab_root = tab_nav.parentNode
          const tab_content = tab_root.querySelector(":scope>.ab-tab-content")
          const tab_nav_items = tab_nav.querySelectorAll(":scope>.ab-tab-nav-item")
          const tab_content_items = tab_content.querySelectorAll(":scope>.ab-tab-content-item")
          for (let j=0; j<tab_content_items.length; j++){
            tab_nav_items[j].setAttribute("is_activate", "false")
            tab_content_items[j].setAttribute("is_activate", "false")
            tab_content_items[j].setAttribute("style", "display:none")
          }
          tab_current.setAttribute("is_activate", "true")
          tab_content_items[i].setAttribute("is_activate", "true")
          tab_content_items[i].setAttribute("style", "display:block")
        `},"2")]),t("div",{class:"ab-tab-content"},[t("div",{class:"ab-tab-content-item markdown-rendered",style:{display:"block"},is_activate:"true",data_index:"1"},[t("div",null,[t("p",null,"11")])]),t("div",{class:"ab-tab-content-item markdown-rendered",style:{display:"none"},is_activate:"false",data_index:"3"},[t("div",null,[t("p",null,"22")])])])])],-1)])])}const m=a(i,[["render",o]]);export{u as __pageData,m as default};
