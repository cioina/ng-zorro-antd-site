import { RouterList } from './types';
import { Routes } from '@angular/router';

export const ROUTER_LIST: RouterList = {
  intro: [
  {
    "path": "docs/introduce/en",
    "label": "Ant Design of Angular",
    "language": "en",
    "order": 0,
    "hidden": false,
    "description": "An enterprise-class Angular UI component library based on Ant Design, all components are open source and free to use under MIT license.An enterprise-c...",
    "experimental": false
  },
  {
    "path": "docs/introduce/zh",
    "label": "Ant Design of Angular",
    "language": "zh",
    "order": 0,
    "hidden": false,
    "description": "ng-zorro-antd 是遵循 Ant Design 设计规范的 Angular UI 组件库，主要用于研发企业级中后台产品。全部代码开源并遵循 MIT 协议，任何企业、组织及个人均可免费使用。提炼自企业级中后台产品的交互语言和视觉风格。开箱即用的高质量 Angular 组件库，与 Angula...",
    "experimental": false
  },
  {
    "path": "docs/getting-started/en",
    "label": "Getting Started",
    "language": "en",
    "order": 1,
    "hidden": false,
    "description": "Ant Design of Angular is dedicated to providing a good development experience for programmers.The prerequisite of Ant Design Angular is a solid backgr...",
    "experimental": false
  },
  {
    "path": "docs/getting-started/zh",
    "label": "快速上手",
    "language": "zh",
    "order": 1,
    "hidden": false,
    "description": "NG-ZORRO 致力于提供给程序员愉悦的开发体验。官方指南假设你已了解关于 HTML、CSS 和 JavaScript 的中级知识，并且已经完全掌握了 Angular 及配套设施的正确开发方式。如果你刚开始学习前端或者 Angular ，将框架作为你的第一步可能不是最好的主意 —— 掌握好基础知识...",
    "experimental": false
  },
  {
    "path": "docs/schematics/en",
    "label": "Schematics",
    "language": "en",
    "order": 2,
    "hidden": false,
    "description": "Using a CLI helps initialize projects, generate template codes and reduce development time.Theng-zorro-antd scaffolding is essentially based on schema...",
    "experimental": false
  },
  {
    "path": "docs/schematics/zh",
    "label": "脚手架",
    "language": "zh",
    "order": 2,
    "hidden": false,
    "description": "使用脚手架可以更加方便的初始化项目，生成模板代码，节省开发时间。脚手架部分完全基于 Schematics 部分进行开发。在项目下运行命令 ng add ng-zorro-antd 跟随选项便可完成初始化配置，包括引入国际化文件，导入模块，引入样式文件等工作。同时你可以通过选择预设的模板创建一个 An...",
    "experimental": false
  },
  {
    "path": "docs/i18n/en",
    "label": "Internationalization",
    "language": "en",
    "order": 4,
    "hidden": false,
    "description": "The default language of ng-zorro-antd is Chinese yet.\nIf you want to use other languages, you can follow the instructions below.\nYou can also set the ...",
    "experimental": false
  },
  {
    "path": "docs/i18n/zh",
    "label": "国际化",
    "language": "zh",
    "order": 4,
    "hidden": false,
    "description": "目前的默认文案是中文，如果需要使用其他语言，可以在初始化时进行配置，也可以在运行中随时修改，可以参考下面的方案。\n你也可以在新建项目时通过 ng add ng-zorro-antd 设置国际化语言。ng-zorro-antd 提供了几个配置型 token 用于全局配置国际化文案和日期，NZ_I18N",
    "experimental": false
  },
  {
    "path": "docs/customize-theme/en",
    "label": "Theme Customization",
    "language": "en",
    "order": 6,
    "hidden": false,
    "description": "Ant Design allows you to customize some basic design aspects in order to meet the needs of UI diversity from business and brand, including primary col...",
    "experimental": false
  },
  {
    "path": "docs/customize-theme/zh",
    "label": "定制主题",
    "language": "zh",
    "order": 6,
    "hidden": false,
    "description": "Ant Design 设计规范上支持一定程度的样式定制，以满足业务和品牌上多样化的视觉需求，包括但不限于主色、圆角、边框和部分组件的视觉定制。Ant Design 的样式使用了 Less 作为开发语言，并定义了一系列全局/组件的样式变量，你可以根据需求进行相应调整，默认样式变量Ant Design ...",
    "experimental": false
  },
  {
    "path": "docs/customize-theme-variable/en",
    "label": "Dynamic Theme (Experimental)",
    "language": "en",
    "order": 6.1,
    "hidden": false,
    "description": "Except less customize theme, We also provide CSS Variable version to enable dynamic theme.This feature depends on CSS Variables. Please check the brow...",
    "experimental": false
  },
  {
    "path": "docs/customize-theme-variable/zh",
    "label": "动态主题（实验性）",
    "language": "zh",
    "order": 6.1,
    "hidden": false,
    "description": "除了 less 定制主题 外，我们还提供了 CSS Variable 版本以支持动态切换主题能力。该功能通过动态修改 CSS Variable 实现，在 IE 中页面将无法正常展示替换当前项目引入样式文件为 CSS Variable 版本：注：如果你使用了 babel-plugin-import，需...",
    "experimental": false
  },
  {
    "path": "docs/global-config/en",
    "label": "Global Configuration",
    "language": "en",
    "order": 7,
    "hidden": false,
    "description": "We add a global configuration support to many components. You can define the default behavior of these components through the global configuration, wh...",
    "experimental": false
  },
  {
    "path": "docs/global-config/zh",
    "label": "全局配置项",
    "language": "zh",
    "order": 7,
    "hidden": false,
    "description": "我们给众多组件添加了全局配置功能，你可以通过全局配置来定义组件的默认行为，从而减少在模板中需要写的代码（让你的代码更加清爽），还能在运行时修改全局配置项。想要为某些组件提供默认配置项, 可以使用 provideNzConfig 函数，传入一个符合 NzConfig 接口的对象。例如：这些全局配置项将...",
    "experimental": false
  },
  {
    "path": "docs/animations/en",
    "label": "Animations Switch",
    "language": "en",
    "order": 8,
    "hidden": false,
    "description": "NG-ZORRO allows developers to turn off the animations. You can set animations' switch by adding corresponding directives or\nconfigurations, or use the...",
    "experimental": false
  },
  {
    "path": "docs/animations/zh",
    "label": "动画开关",
    "language": "zh",
    "order": 8,
    "hidden": false,
    "description": "NG-ZORRO 允许开发者关闭动画效果，您可以通过添加对应指令或者配置来设置动画的开关，也可以通过全局配置关闭所有动画。在模块中使用 NoopAnimationsModule 替换 BrowserAnimationsModule。引入 NzNoAnimationModule 模块。在想关闭动画的组...",
    "experimental": false
  },
  {
    "path": "docs/direction/en",
    "label": "Direction",
    "language": "en",
    "order": 9,
    "hidden": false,
    "description": "Set the direction (LTR / RTL).Set the dir attribute on the document body or html tag.Import the Angular CDK bidi module.Set the direction for the appl...",
    "experimental": false
  },
  {
    "path": "docs/direction/zh",
    "label": "文字方向",
    "language": "zh",
    "order": 9,
    "hidden": false,
    "description": "设置文字方向（LTR / RTL）。在文档 body 或者 html 标签上设置 dir 属性。引入 Angular CDK bidi 模块在模版中为应用或其后代设置方向。例如对话框（Modal）服务。Angular CDK Bidirectionalitydir - HTML | MDN",
    "experimental": false
  },
  {
    "path": "docs/recommendation/en",
    "label": "Resources",
    "language": "en",
    "order": 10,
    "hidden": false,
    "description": "ng-zorro-antd is essentially implementing Ant Design in Angular. We recommend you to use the following existing\nresources, which can hopefully serve w...",
    "experimental": false
  },
  {
    "path": "docs/recommendation/zh",
    "label": "资源推荐",
    "language": "zh",
    "order": 10,
    "hidden": false,
    "description": "我们根据自己的开发和使用经验总结了一些可能对开发者有用的资源。ng-zorro-antd 是 Ant Design 设计规范的 Angular 实现，我们推荐使用以下社区已有的优秀实现和网站，希望能为你的开发过程提供帮助。这里包含了一些优秀的 Angular 博客和网站，供开发者参考。Angular...",
    "experimental": false
  },
  {
    "path": "docs/faq/en",
    "label": "FAQ",
    "language": "en",
    "order": 11,
    "hidden": false,
    "description": "For more questions please search issues with FAQ tag.The size hello-world project of angular after gzip is about 30KB, the size of ng-zorro-antd's doc...",
    "experimental": false
  },
  {
    "path": "docs/faq/zh",
    "label": "常见问题",
    "language": "zh",
    "order": 11,
    "hidden": false,
    "description": "更多常见问题请搜索标有 FAQ 的 issue。Angular 的 hello-world 项目（包含路由、动画与 Http 等模块） gzip 之后大概 30KB，ng-zorro-antd 的官网（包含所有组件，懒加载）打包后 gzip 之后为 287KB。这与 React 或者 Vue 增加路...",
    "experimental": false
  },
  {
    "path": "docs/contributing/en",
    "label": "How to Contribute",
    "language": "en",
    "order": 12,
    "hidden": false,
    "description": "The following is a set of guidelines about making contributions to NG-ZORRO. Please spend several minutes in reading these guidelines before submittin...",
    "experimental": false
  },
  {
    "path": "docs/contributing/zh",
    "label": "贡献指南",
    "language": "zh",
    "order": 12,
    "hidden": false,
    "description": "这篇指南会指导你如何为 NG-ZORRO 贡献一份自己的力量，请在你要提 issue 或者 pull request 之前花几分钟来阅读一遍这篇指南。我们有一份 行为准则，希望所有的贡献者都能遵守，请花时间阅读一遍全文以确保你能明白哪些是可以做的，哪些是不可以做的。我们所有的工作都会放在 GitHu...",
    "experimental": false
  },
  {
    "path": "docs/changelog/en",
    "label": "Change Log",
    "language": "en",
    "order": 13,
    "hidden": false,
    "description": "ng-zorro-antd strictly follows Semantic Versioning 2.0.0.Weekly release: patch version at the end of every week for routine bugfix (anytime for urgent...",
    "experimental": false
  },
  {
    "path": "docs/changelog/zh",
    "label": "更新日志",
    "language": "zh",
    "order": 13,
    "hidden": false,
    "description": "ng-zorro-antd 严格遵循 Semantic Versioning 2.0.0 语义化版本规范。修订版本号：每周五会进行日常 bugfix 更新。（如果有紧急的 bugfix，则任何时候都可发布）次版本号：每月发布一个带有新特性的向下兼容的版本。主版本号：含有破坏性更新和新特性，不在发布周...",
    "experimental": false
  },
  {
    "path": "docs/migration-v21/en",
    "label": "v21 Migration Guide",
    "language": "en",
    "order": 15,
    "hidden": false,
    "description": "This document will help you upgrade from ng-zorro-antd 20.x version to 21.x version.Make sure Node.js >= 20.19.0 or >= 22.12.0 or >= 24.0.0.Create a n...",
    "experimental": false
  },
  {
    "path": "docs/migration-v21/zh",
    "label": "v21 升级指南",
    "language": "zh",
    "order": 15,
    "hidden": false,
    "description": "本文档将帮助你从 ng-zorro-antd 20.x 版本升级到 21.x 版本。确保 Node.js >= 20.19.0 或 >= 22.12.0 或 >= 24.0.0创建新的分支，或者使用其他方式备份当前项目删除项目下 package-lock.json 文件参考升级指南将项目升级到 An...",
    "experimental": false
  },
  {
    "path": "docs/join/en",
    "label": "Join us",
    "language": "en",
    "order": 16,
    "hidden": true,
    "description": "",
    "experimental": false
  },
  {
    "path": "docs/join/zh",
    "label": "社区招募",
    "language": "zh",
    "order": 16,
    "hidden": false,
    "description": "NG-ZORRO 经过多年发展，受到的许多开发者的青睐帮助，目前已成为年下载量超 400+ 万的组件库。\n在此感谢每一位参与社区推广与开发的同学，以及每一位 NG-ZORRO 用户!为了更好地提升 NG-ZORRO 的用户体验，我们也期望更多的同学能够参与到组件库的日常开发与社区答疑，\n来帮助 NG...",
    "experimental": false
  }
],
  components: [
  {
    "name": "通用",
    "language": "zh",
    "children": [
      {
        "label": "Button",
        "path": "components/button/zh",
        "zh": "按钮",
        "cover": "https://gw.alipayobjects.com/zos/alicdn/fNUKzY1sk/Button.svg",
        "tag": "",
        "description": "Angular 按钮组件，按钮用于开始一个即时操作。"
      },
      {
        "label": "FloatButton",
        "path": "components/float-button/zh",
        "zh": "悬浮按钮",
        "cover": "https://mdn.alipayobjects.com/huamei_7uahnr/afts/img/A*HS-wTIIwu0kAAAAAAAAAAAAADrJ8AQ/original",
        "tag": "19.0.0",
        "description": "Angular 悬浮按钮组件，悬浮于页面上方的按钮。"
      },
      {
        "label": "Icon",
        "path": "components/icon/zh",
        "zh": "图标",
        "cover": "https://gw.alipayobjects.com/zos/alicdn/rrwbSt3FQ/Icon.svg",
        "tag": "",
        "description": "Angular 图标组件，语义化的矢量图形。"
      },
      {
        "label": "Typography",
        "path": "components/typography/zh",
        "zh": "排版",
        "cover": "https://gw.alipayobjects.com/zos/alicdn/GOM1KQ24O/Typography.svg",
        "tag": "",
        "description": "Angular 排版组件，文本的基本格式。"
      }
    ],
    "experimentalChildren": [
      {
        "label": "Pipes",
        "path": "experimental/pipes/zh",
        "zh": "",
        "experimental": true,
        "tag": "",
        "description": "Angular Pipes Component, 常用 Pipes 集合。"
      }
    ]
  },
  {
    "name": "General",
    "language": "en",
    "children": [
      {
        "label": "Button",
        "path": "components/button/en",
        "zh": "",
        "cover": "https://gw.alipayobjects.com/zos/alicdn/fNUKzY1sk/Button.svg",
        "tag": "",
        "description": "Angular Button Component, To trigger an operation."
      },
      {
        "label": "FloatButton",
        "path": "components/float-button/en",
        "zh": "",
        "cover": "https://mdn.alipayobjects.com/huamei_7uahnr/afts/img/A*HS-wTIIwu0kAAAAAAAAAAAAADrJ8AQ/original",
        "tag": "19.0.0",
        "description": "Angular FloatButton Component, A button that floats at the top of the page."
      },
      {
        "label": "Icon",
        "path": "components/icon/en",
        "zh": "",
        "cover": "https://gw.alipayobjects.com/zos/alicdn/rrwbSt3FQ/Icon.svg",
        "tag": "",
        "description": "Angular Icon Component, Semantic vector graphics."
      },
      {
        "label": "Typography",
        "path": "components/typography/en",
        "zh": "",
        "cover": "https://gw.alipayobjects.com/zos/alicdn/GOM1KQ24O/Typography.svg",
        "tag": "",
        "description": "Angular Typography Component, Basic text writing, including headings, body text, lists, and more."
      }
    ],
    "experimentalChildren": [
      {
        "label": "Pipes",
        "path": "experimental/pipes/en",
        "zh": "",
        "experimental": true,
        "tag": "",
        "description": "Angular Pipes Component, Common Pipe Collections."
      }
    ]
  },
  {
    "name": "布局",
    "language": "zh",
    "children": [
      {
        "label": "Divider",
        "path": "components/divider/zh",
        "zh": "分割线",
        "cover": "https://gw.alipayobjects.com/zos/alicdn/5swjECahe/Divider.svg",
        "tag": "",
        "description": "Angular 分割线组件，区隔内容的分割线。"
      },
      {
        "label": "Flex",
        "path": "components/flex/zh",
        "zh": "弹性布局",
        "cover": "https://mdn.alipayobjects.com/huamei_7uahnr/afts/img/A*SMzgSJZE_AwAAAAAAAAAAAAADrJ8AQ/original",
        "tag": "17.1.0",
        "description": "Angular 弹性布局组件，用于对齐的弹性布局容器。"
      },
      {
        "label": "Grid",
        "path": "components/grid/zh",
        "zh": "栅格",
        "cover": "https://gw.alipayobjects.com/zos/alicdn/5rWLU27so/Grid.svg",
        "tag": "",
        "description": "Angular 栅格组件，24 栅格系统。"
      },
      {
        "label": "Layout",
        "path": "components/layout/zh",
        "zh": "布局",
        "cover": "https://gw.alipayobjects.com/zos/alicdn/hzEndUVEx/Layout.svg",
        "tag": "",
        "description": "Angular 布局组件，协助进行页面级整体布局。"
      },
      {
        "label": "Space",
        "path": "components/space/zh",
        "zh": "间距",
        "cover": "https://gw.alipayobjects.com/zos/antfincdn/wc6%263gJ0Y8/Space.svg",
        "tag": "",
        "description": "Angular 间距组件，设置组件之间的间距。"
      },
      {
        "label": "Splitter",
        "path": "components/splitter/zh",
        "zh": "分隔面板",
        "cover": "https://mdn.alipayobjects.com/huamei_7uahnr/afts/img/A*f0SISaETY0wAAAAAAAAAAAAADrJ8AQ/original",
        "tag": "19.2.0",
        "description": "Angular 分隔面板组件，自由切分指定区域。"
      }
    ],
    "experimentalChildren": [
      {
        "label": "Resizable",
        "path": "experimental/resizable/zh",
        "zh": "调整尺寸",
        "experimental": true,
        "tag": "",
        "description": "Angular 调整尺寸组件，调整元素尺寸。"
      }
    ]
  },
  {
    "name": "Layout",
    "language": "en",
    "children": [
      {
        "label": "Divider",
        "path": "components/divider/en",
        "zh": "",
        "cover": "https://gw.alipayobjects.com/zos/alicdn/5swjECahe/Divider.svg",
        "tag": "",
        "description": "Angular Divider Component, A divider line separates different content."
      },
      {
        "label": "Flex",
        "path": "components/flex/en",
        "zh": "",
        "cover": "https://mdn.alipayobjects.com/huamei_7uahnr/afts/img/A*SMzgSJZE_AwAAAAAAAAAAAAADrJ8AQ/original",
        "tag": "17.1.0",
        "description": "Angular Flex Component, A flex layout container for alignment."
      },
      {
        "label": "Grid",
        "path": "components/grid/en",
        "zh": "",
        "cover": "https://gw.alipayobjects.com/zos/alicdn/5rWLU27so/Grid.svg",
        "tag": "",
        "description": "Angular Grid Component, 24 Grids System。"
      },
      {
        "label": "Layout",
        "path": "components/layout/en",
        "zh": "",
        "cover": "https://gw.alipayobjects.com/zos/alicdn/hzEndUVEx/Layout.svg",
        "tag": "",
        "description": "Angular Layout Component, Handling the overall layout of a page."
      },
      {
        "label": "Space",
        "path": "components/space/en",
        "zh": "",
        "cover": "https://gw.alipayobjects.com/zos/antfincdn/wc6%263gJ0Y8/Space.svg",
        "tag": "",
        "description": "Angular Space Component, Set components spacing."
      },
      {
        "label": "Splitter",
        "path": "components/splitter/en",
        "zh": "",
        "cover": "https://mdn.alipayobjects.com/huamei_7uahnr/afts/img/A*f0SISaETY0wAAAAAAAAAAAAADrJ8AQ/original",
        "tag": "19.2.0",
        "description": "Angular Splitter Component, Splits the area into multiple horizontal or vertical sides."
      }
    ],
    "experimentalChildren": [
      {
        "label": "Resizable",
        "path": "experimental/resizable/en",
        "zh": "",
        "experimental": true,
        "tag": "",
        "description": "Angular Resizable Component, Resize element."
      }
    ]
  },
  {
    "name": "导航",
    "language": "zh",
    "children": [
      {
        "label": "Anchor",
        "path": "components/anchor/zh",
        "zh": "锚点",
        "cover": "https://gw.alipayobjects.com/zos/alicdn/_1-C1JwsC/Anchor.svg",
        "tag": "",
        "description": "Angular 锚点组件，用于跳转到页面指定位置。"
      },
      {
        "label": "Breadcrumb",
        "path": "components/breadcrumb/zh",
        "zh": "面包屑",
        "cover": "https://gw.alipayobjects.com/zos/alicdn/9Ltop8JwH/Breadcrumb.svg",
        "tag": "",
        "description": "Angular 面包屑组件，显示当前页面在系统层级结构中的位置，并能向上返回。"
      },
      {
        "label": "Dropdown",
        "path": "components/dropdown/zh",
        "zh": "下拉菜单",
        "cover": "https://gw.alipayobjects.com/zos/alicdn/eedWN59yJ/Dropdown.svg",
        "tag": "",
        "description": "Angular 下拉菜单组件，向下弹出的列表。"
      },
      {
        "label": "Menu",
        "path": "components/menu/zh",
        "zh": "导航菜单",
        "cover": "https://gw.alipayobjects.com/zos/alicdn/3XZcjGpvK/Menu.svg",
        "tag": "",
        "description": "Angular 导航菜单组件，为页面和功能提供导航的菜单列表。"
      },
      {
        "label": "PageHeader",
        "path": "components/page-header/zh",
        "zh": "页头",
        "cover": "https://gw.alipayobjects.com/zos/alicdn/6bKE0Cq0R/PageHeader.svg",
        "tag": "",
        "description": "Angular 页头组件，带有通用操作的页头。"
      },
      {
        "label": "Pagination",
        "path": "components/pagination/zh",
        "zh": "分页",
        "cover": "https://gw.alipayobjects.com/zos/alicdn/1vqv2bj68/Pagination.svg",
        "tag": "",
        "description": "Angular 分页组件，分页器用于分隔长列表，每次只加载一个页面。"
      },
      {
        "label": "Steps",
        "path": "components/steps/zh",
        "zh": "步骤条",
        "cover": "https://gw.alipayobjects.com/zos/antfincdn/UZYqMizXHaj/Steps.svg",
        "tag": "",
        "description": "Angular 步骤条组件，引导用户按照流程完成任务的导航条。"
      },
      {
        "label": "Tabs",
        "path": "components/tabs/zh",
        "zh": "标签页",
        "cover": "https://gw.alipayobjects.com/zos/antfincdn/lkI2hNEDr2V/Tabs.svg",
        "tag": "",
        "description": "Angular 标签页组件，选项卡切换组件。"
      }
    ],
    "experimentalChildren": []
  },
  {
    "name": "Navigation",
    "language": "en",
    "children": [
      {
        "label": "Anchor",
        "path": "components/anchor/en",
        "zh": "",
        "cover": "https://gw.alipayobjects.com/zos/alicdn/_1-C1JwsC/Anchor.svg",
        "tag": "",
        "description": "Angular Anchor Component, Hyperlinks to scroll on one page."
      },
      {
        "label": "Breadcrumb",
        "path": "components/breadcrumb/en",
        "zh": "",
        "cover": "https://gw.alipayobjects.com/zos/alicdn/9Ltop8JwH/Breadcrumb.svg",
        "tag": "",
        "description": "Angular Breadcrumb Component, Displays the current location within a hierarchy. And allow going back to states higher up in the hierarchy."
      },
      {
        "label": "Dropdown",
        "path": "components/dropdown/en",
        "zh": "",
        "cover": "https://gw.alipayobjects.com/zos/alicdn/eedWN59yJ/Dropdown.svg",
        "tag": "",
        "description": "Angular Dropdown Component, A dropdown list."
      },
      {
        "label": "Menu",
        "path": "components/menu/en",
        "zh": "",
        "cover": "https://gw.alipayobjects.com/zos/alicdn/3XZcjGpvK/Menu.svg",
        "tag": "",
        "description": "Angular Menu Component, A versatile menu for navigation."
      },
      {
        "label": "PageHeader",
        "path": "components/page-header/en",
        "zh": "",
        "cover": "https://gw.alipayobjects.com/zos/alicdn/6bKE0Cq0R/PageHeader.svg",
        "tag": "",
        "description": "Angular PageHeader Component, A header with common actions and design elements built in."
      },
      {
        "label": "Pagination",
        "path": "components/pagination/en",
        "zh": "",
        "cover": "https://gw.alipayobjects.com/zos/alicdn/1vqv2bj68/Pagination.svg",
        "tag": "",
        "description": "Angular Pagination Component, A long list can be divided into several pages by `Pagination`, and only one page will be loaded at a time."
      },
      {
        "label": "Steps",
        "path": "components/steps/en",
        "zh": "",
        "cover": "https://gw.alipayobjects.com/zos/antfincdn/UZYqMizXHaj/Steps.svg",
        "tag": "",
        "description": "Angular Steps Component, A navigation bar that guides users through the steps of a task."
      },
      {
        "label": "Tabs",
        "path": "components/tabs/en",
        "zh": "",
        "cover": "https://gw.alipayobjects.com/zos/antfincdn/lkI2hNEDr2V/Tabs.svg",
        "tag": "",
        "description": "Angular Tabs Component, Tabs make it easy to switch between different views."
      }
    ],
    "experimentalChildren": []
  },
  {
    "name": "数据录入",
    "language": "zh",
    "children": [
      {
        "label": "AutoComplete",
        "path": "components/auto-complete/zh",
        "zh": "自动完成",
        "cover": "https://gw.alipayobjects.com/zos/alicdn/qtJm4yt45/AutoComplete.svg",
        "tag": "",
        "description": "Angular 自动完成组件，输入框自动完成功能。"
      },
      {
        "label": "Cascader",
        "path": "components/cascader/zh",
        "zh": "级联选择",
        "cover": "https://gw.alipayobjects.com/zos/alicdn/UdS8y8xyZ/Cascader.svg",
        "tag": "",
        "description": "Angular 级联选择组件，级联选择框。"
      },
      {
        "label": "Checkbox",
        "path": "components/checkbox/zh",
        "zh": "多选框",
        "cover": "https://gw.alipayobjects.com/zos/alicdn/8nbVbHEm_/CheckBox.svg",
        "tag": "",
        "description": "Angular 多选框组件，收集用户的多项选择。"
      },
      {
        "label": "ColorPicker",
        "path": "components/color-picker/zh",
        "zh": "颜色选择器",
        "cover": "https://mdn.alipayobjects.com/huamei_7uahnr/afts/img/A*PpY4RYNM8UcAAAAAAAAAAAAADrJ8AQ/original",
        "tag": "16.2.0",
        "description": "Angular 颜色选择器组件，用于颜色选择。"
      },
      {
        "label": "DatePicker",
        "path": "components/date-picker/zh",
        "zh": "日期选择框",
        "cover": "https://gw.alipayobjects.com/zos/alicdn/RT_USzA48/DatePicker.svg",
        "tag": "",
        "description": "Angular 日期选择框组件，输入或选择日期的控件。"
      },
      {
        "label": "Form",
        "path": "components/form/zh",
        "zh": "表单",
        "cover": "https://gw.alipayobjects.com/zos/alicdn/ORmcdeaoO/Form.svg",
        "tag": "",
        "description": "Angular 表单组件，高性能表单控件，自带数据域管理。包含数据录入、校验以及对应样式。"
      },
      {
        "label": "Input",
        "path": "components/input/zh",
        "zh": "输入框",
        "cover": "https://gw.alipayobjects.com/zos/alicdn/xS9YEJhfe/Input.svg",
        "tag": "更新",
        "description": "Angular 输入框组件，通过鼠标或键盘输入内容，是最基础的表单域的包装。"
      },
      {
        "label": "InputNumber",
        "path": "components/input-number/zh",
        "zh": "数字输入框",
        "cover": "https://gw.alipayobjects.com/zos/alicdn/XOS8qZ0kU/InputNumber.svg",
        "tag": "19.0.0",
        "description": "Angular 数字输入框组件，通过鼠标或键盘，输入范围内的数值。"
      },
      {
        "label": "Mention",
        "path": "components/mention/zh",
        "zh": "提及",
        "cover": "https://gw.alipayobjects.com/zos/alicdn/jPE-itMFM/Mentions.svg",
        "tag": "",
        "description": "Angular 提及组件，用于在输入中提及某人或某事。"
      },
      {
        "label": "Radio",
        "path": "components/radio/zh",
        "zh": "单选框",
        "cover": "https://gw.alipayobjects.com/zos/alicdn/8cYb5seNB/Radio.svg",
        "tag": "",
        "description": "Angular 单选框组件，用于在多个备选项中选中单个状态。"
      },
      {
        "label": "Rate",
        "path": "components/rate/zh",
        "zh": "评分",
        "cover": "https://gw.alipayobjects.com/zos/alicdn/R5uiIWmxe/Rate.svg",
        "tag": "",
        "description": "Angular 评分组件，用于对事物进行评分操作。"
      },
      {
        "label": "Select",
        "path": "components/select/zh",
        "zh": "选择器",
        "cover": "https://gw.alipayobjects.com/zos/alicdn/_0XzgOis7/Select.svg",
        "tag": "",
        "description": "Angular 选择器组件，下拉选择器。"
      },
      {
        "label": "Slider",
        "path": "components/slider/zh",
        "zh": "滑动输入条",
        "cover": "https://gw.alipayobjects.com/zos/alicdn/HZ3meFc6W/Silder.svg",
        "tag": "",
        "description": "Angular 滑动输入条组件，滑动型输入器，展示当前值和可选范围。"
      },
      {
        "label": "Switch",
        "path": "components/switch/zh",
        "zh": "开关",
        "cover": "https://gw.alipayobjects.com/zos/alicdn/zNdJQMhfm/Switch.svg",
        "tag": "",
        "description": "Angular 开关组件，使用开关切换两种状态之间。"
      },
      {
        "label": "TimePicker",
        "path": "components/time-picker/zh",
        "zh": "时间选择框",
        "cover": "https://gw.alipayobjects.com/zos/alicdn/h04Zsl98I/TimePicker.svg",
        "tag": "",
        "description": "Angular 时间选择框组件，输入或选择时间的控件。"
      },
      {
        "label": "Transfer",
        "path": "components/transfer/zh",
        "zh": "穿梭框",
        "cover": "https://gw.alipayobjects.com/zos/alicdn/QAXskNI4G/Transfer.svg",
        "tag": "",
        "description": "Angular 穿梭框组件，双栏穿梭选择框。"
      },
      {
        "label": "TreeSelect",
        "path": "components/tree-select/zh",
        "zh": "树选择",
        "cover": "https://gw.alipayobjects.com/zos/alicdn/Ax4DA0njr/TreeSelect.svg",
        "tag": "",
        "description": "Angular 树选择组件，树型选择控件。"
      },
      {
        "label": "Upload",
        "path": "components/upload/zh",
        "zh": "上传",
        "cover": "https://gw.alipayobjects.com/zos/alicdn/QaeBt_ZMg/Upload.svg",
        "tag": "",
        "description": "Angular 上传组件，文件选择上传和拖拽上传控件。"
      }
    ],
    "experimentalChildren": [
      {
        "label": "Code Editor",
        "path": "experimental/code-editor/zh",
        "zh": "代码编辑器",
        "experimental": true,
        "tag": "",
        "description": "Angular 代码编辑器组件，基于 monaco-editor 的代码编辑器。"
      },
      {
        "label": "Cron Expression",
        "path": "experimental/cron-expression/zh",
        "zh": "cron 表单",
        "experimental": true,
        "tag": "",
        "description": "Angular cron 表单组件，显示和编辑 cron 表达式。"
      }
    ]
  },
  {
    "name": "Data Entry",
    "language": "en",
    "children": [
      {
        "label": "AutoComplete",
        "path": "components/auto-complete/en",
        "zh": "",
        "cover": "https://gw.alipayobjects.com/zos/alicdn/qtJm4yt45/AutoComplete.svg",
        "tag": "",
        "description": "Angular AutoComplete Component, AutoComplete function of input field."
      },
      {
        "label": "Cascader",
        "path": "components/cascader/en",
        "zh": "",
        "cover": "https://gw.alipayobjects.com/zos/alicdn/UdS8y8xyZ/Cascader.svg",
        "tag": "",
        "description": "Angular Cascader Component, Cascade selection box."
      },
      {
        "label": "Checkbox",
        "path": "components/checkbox/en",
        "zh": "",
        "cover": "https://gw.alipayobjects.com/zos/alicdn/8nbVbHEm_/CheckBox.svg",
        "tag": "",
        "description": "Angular Checkbox Component, Collect user's choices."
      },
      {
        "label": "ColorPicker",
        "path": "components/color-picker/en",
        "zh": "",
        "cover": "https://mdn.alipayobjects.com/huamei_7uahnr/afts/img/A*PpY4RYNM8UcAAAAAAAAAAAAADrJ8AQ/original",
        "tag": "16.2.0",
        "description": "Angular ColorPicker Component, Used for color selection."
      },
      {
        "label": "DatePicker",
        "path": "components/date-picker/en",
        "zh": "",
        "cover": "https://gw.alipayobjects.com/zos/alicdn/RT_USzA48/DatePicker.svg",
        "tag": "",
        "description": "Angular DatePicker Component, To select or input a date."
      },
      {
        "label": "Form",
        "path": "components/form/en",
        "zh": "",
        "cover": "https://gw.alipayobjects.com/zos/alicdn/ORmcdeaoO/Form.svg",
        "tag": "",
        "description": "Angular Form Component, High-performance form component with data domain management. Includes data entry, validation, and corresponding styles."
      },
      {
        "label": "Input",
        "path": "components/input/en",
        "zh": "",
        "cover": "https://gw.alipayobjects.com/zos/alicdn/xS9YEJhfe/Input.svg",
        "tag": "Update",
        "description": "Angular Input Component, Through mouse or keyboard input content, it is the most basic form field wrapper."
      },
      {
        "label": "InputNumber",
        "path": "components/input-number/en",
        "zh": "",
        "cover": "https://gw.alipayobjects.com/zos/alicdn/XOS8qZ0kU/InputNumber.svg",
        "tag": "19.0.0",
        "description": "Angular InputNumber Component, Enter a number within certain range with the mouse or keyboard."
      },
      {
        "label": "Mention",
        "path": "components/mention/en",
        "zh": "",
        "cover": "https://gw.alipayobjects.com/zos/alicdn/jPE-itMFM/Mentions.svg",
        "tag": "",
        "description": "Angular Mention Component, Used to mention someone or something in an input."
      },
      {
        "label": "Radio",
        "path": "components/radio/en",
        "zh": "",
        "cover": "https://gw.alipayobjects.com/zos/alicdn/8cYb5seNB/Radio.svg",
        "tag": "",
        "description": "Angular Radio Component, Used to select a single state from multiple options."
      },
      {
        "label": "Rate",
        "path": "components/rate/en",
        "zh": "",
        "cover": "https://gw.alipayobjects.com/zos/alicdn/R5uiIWmxe/Rate.svg",
        "tag": "",
        "description": "Angular Rate Component, Used for rating operation on something."
      },
      {
        "label": "Select",
        "path": "components/select/en",
        "zh": "",
        "cover": "https://gw.alipayobjects.com/zos/alicdn/_0XzgOis7/Select.svg",
        "tag": "",
        "description": "Angular Select Component, A dropdown menu for displaying choices."
      },
      {
        "label": "Slider",
        "path": "components/slider/en",
        "zh": "",
        "cover": "https://gw.alipayobjects.com/zos/alicdn/HZ3meFc6W/Silder.svg",
        "tag": "",
        "description": "Angular Slider Component, A Slider component for displaying current value and intervals in range."
      },
      {
        "label": "Switch",
        "path": "components/switch/en",
        "zh": "",
        "cover": "https://gw.alipayobjects.com/zos/alicdn/zNdJQMhfm/Switch.svg",
        "tag": "",
        "description": "Angular Switch Component, Used to toggle between two states."
      },
      {
        "label": "TimePicker",
        "path": "components/time-picker/en",
        "zh": "",
        "cover": "https://gw.alipayobjects.com/zos/alicdn/h04Zsl98I/TimePicker.svg",
        "tag": "",
        "description": "Angular TimePicker Component, To select/input a time."
      },
      {
        "label": "Transfer",
        "path": "components/transfer/en",
        "zh": "",
        "cover": "https://gw.alipayobjects.com/zos/alicdn/QAXskNI4G/Transfer.svg",
        "tag": "",
        "description": "Angular Transfer Component, Double column transfer choice box."
      },
      {
        "label": "TreeSelect",
        "path": "components/tree-select/en",
        "zh": "",
        "cover": "https://gw.alipayobjects.com/zos/alicdn/Ax4DA0njr/TreeSelect.svg",
        "tag": "",
        "description": "Angular TreeSelect Component, Tree selection control."
      },
      {
        "label": "Upload",
        "path": "components/upload/en",
        "zh": "",
        "cover": "https://gw.alipayobjects.com/zos/alicdn/QaeBt_ZMg/Upload.svg",
        "tag": "",
        "description": "Angular Upload Component, Used to select and upload files or drag and drop files."
      }
    ],
    "experimentalChildren": [
      {
        "label": "Code Editor",
        "path": "experimental/code-editor/en",
        "zh": "",
        "experimental": true,
        "tag": "",
        "description": "Angular Code Editor Component, Code Editor based on monaco-editor."
      },
      {
        "label": "Cron Expression",
        "path": "experimental/cron-expression/en",
        "zh": "cron form",
        "experimental": true,
        "tag": "",
        "description": "Angular cron form组件，Display and edit cron expression."
      }
    ]
  },
  {
    "name": "数据展示",
    "language": "zh",
    "children": [
      {
        "label": "Avatar",
        "path": "components/avatar/zh",
        "zh": "头像",
        "cover": "https://gw.alipayobjects.com/zos/antfincdn/aBcnbw68hP/Avatar.svg",
        "tag": "",
        "description": "Angular 头像组件，用来代表用户或事物，支持图片、图标或字符展示。"
      },
      {
        "label": "Badge",
        "path": "components/badge/zh",
        "zh": "徽标数",
        "cover": "https://gw.alipayobjects.com/zos/antfincdn/6%26GF9WHwvY/Badge.svg",
        "tag": "",
        "description": "Angular 徽标数组件，图标右上角的圆形徽标数字。"
      },
      {
        "label": "Calendar",
        "path": "components/calendar/zh",
        "zh": "日历",
        "cover": "https://gw.alipayobjects.com/zos/antfincdn/dPQmLq08DI/Calendar.svg",
        "tag": "",
        "description": "Angular 日历组件，按照日历形式展示数据的容器。"
      },
      {
        "label": "Card",
        "path": "components/card/zh",
        "zh": "卡片",
        "cover": "https://gw.alipayobjects.com/zos/alicdn/keNB-R8Y9/Card.svg",
        "tag": "",
        "description": "Angular 卡片组件，通用卡片容器。"
      },
      {
        "label": "Carousel",
        "path": "components/carousel/zh",
        "zh": "走马灯",
        "cover": "https://gw.alipayobjects.com/zos/antfincdn/%24C9tmj978R/Carousel.svg",
        "tag": "",
        "description": "Angular 走马灯组件，一组轮播的区域。"
      },
      {
        "label": "Collapse",
        "path": "components/collapse/zh",
        "zh": "折叠面板",
        "cover": "https://gw.alipayobjects.com/zos/alicdn/IxH16B9RD/Collapse.svg",
        "tag": "",
        "description": "Angular 折叠面板组件，可以折叠/展开的内容区域。"
      },
      {
        "label": "Comment",
        "path": "components/comment/zh",
        "zh": "评论",
        "cover": "https://gw.alipayobjects.com/zos/alicdn/ILhxpGzBO/Comment.svg",
        "tag": "",
        "description": "Angular 评论组件，对网站内容的反馈、评价和讨论。"
      },
      {
        "label": "Descriptions",
        "path": "components/descriptions/zh",
        "zh": "描述列表",
        "cover": "https://gw.alipayobjects.com/zos/alicdn/MjtG9_FOI/Descriptions.svg",
        "tag": "",
        "description": "Angular 描述列表组件，展示多个只读字段的组合。"
      },
      {
        "label": "Empty",
        "path": "components/empty/zh",
        "zh": "空状态",
        "cover": "https://gw.alipayobjects.com/zos/alicdn/MNbKfLBVb/Empty.svg",
        "tag": "",
        "description": "Angular 空状态组件，空状态时的展示占位图。"
      },
      {
        "label": "Image",
        "path": "components/image/zh",
        "zh": "图片",
        "cover": "https://gw.alipayobjects.com/zos/antfincdn/D1dXz9PZqa/image.svg",
        "tag": "",
        "description": "Angular 图片组件，可预览的图片。"
      },
      {
        "label": "List",
        "path": "components/list/zh",
        "zh": "列表",
        "cover": "https://gw.alipayobjects.com/zos/alicdn/5FrZKStG_/List.svg",
        "tag": "",
        "description": "Angular 列表组件，最基础的列表展示，可承载文字、列表、图片、段落。"
      },
      {
        "label": "Popover",
        "path": "components/popover/zh",
        "zh": "气泡卡片",
        "cover": "https://gw.alipayobjects.com/zos/alicdn/1PNL1p_cO/Popover.svg",
        "tag": "",
        "description": "Angular 气泡卡片组件，点击/鼠标移入元素，弹出气泡式的卡片浮层。"
      },
      {
        "label": "QRCode",
        "path": "components/qr-code/zh",
        "zh": "二维码",
        "cover": "https://mdn.alipayobjects.com/huamei_7uahnr/afts/img/A*cJopQrf0ncwAAAAAAAAAAAAADrJ8AQ/original",
        "tag": "15.1.0",
        "description": "Angular 二维码组件，能够将文本转换生成二维码的组件，支持自定义配色和 Logo 配置。"
      },
      {
        "label": "Segmented",
        "path": "components/segmented/zh",
        "zh": "分段控制器",
        "cover": "https://gw.alipayobjects.com/zos/bmw-prod/a3ff040f-24ba-43e0-92e9-c845df1612ad.svg",
        "tag": "",
        "description": "Angular 分段控制器组件，用于展示多个选项并允许用户选择其中单个选项。"
      },
      {
        "label": "Statistic",
        "path": "components/statistic/zh",
        "zh": "统计",
        "cover": "https://gw.alipayobjects.com/zos/antfincdn/rcBNhLBrKbE/Statistic.svg",
        "tag": "",
        "description": "Angular 统计组件，展示统计数字。"
      },
      {
        "label": "Table",
        "path": "components/table/zh",
        "zh": "表格",
        "cover": "https://gw.alipayobjects.com/zos/alicdn/f-SbcX2Lx/Table.svg",
        "tag": "",
        "description": "Angular 表格组件，展示行列数据。"
      },
      {
        "label": "Tag",
        "path": "components/tag/zh",
        "zh": "标签",
        "cover": "https://gw.alipayobjects.com/zos/alicdn/cH1BOLfxC/Tag.svg",
        "tag": "",
        "description": "Angular 标签组件，进行标记和分类的小标签。"
      },
      {
        "label": "Timeline",
        "path": "components/timeline/zh",
        "zh": "时间轴",
        "cover": "https://gw.alipayobjects.com/zos/antfincdn/vJmo00mmgR/Timeline.svg",
        "tag": "",
        "description": "Angular 时间轴组件，垂直展示的时间流信息。"
      },
      {
        "label": "Tooltip",
        "path": "components/tooltip/zh",
        "zh": "文字提示",
        "cover": "https://gw.alipayobjects.com/zos/alicdn/Vyyeu8jq2/Tooltp.svg",
        "tag": "",
        "description": "Angular 文字提示组件，简单的文字提示气泡框。"
      },
      {
        "label": "Tree",
        "path": "components/tree/zh",
        "zh": "树形控件",
        "cover": "https://gw.alipayobjects.com/zos/alicdn/Xh-oWqg9k/Tree.svg",
        "tag": "",
        "description": "Angular 树形控件组件，多层次的结构列表。"
      },
      {
        "label": "TreeView",
        "path": "components/tree-view/zh",
        "zh": "树视图",
        "cover": "https://gw.alipayobjects.com/zos/alicdn/Xh-oWqg9k/Tree.svg",
        "tag": "",
        "description": "Angular 树视图组件，树视图组件，相比封装好的 Tree 组件具有更高的定制度和更好的性能。"
      }
    ],
    "experimentalChildren": [
      {
        "label": "Image",
        "path": "experimental/experimental-image/zh",
        "zh": "图片",
        "experimental": true,
        "tag": "",
        "description": "Angular 图片组件，实验性的图片组件。"
      },
      {
        "label": "Graph",
        "path": "experimental/graph/zh",
        "zh": "流程图",
        "experimental": true,
        "tag": "",
        "description": "Angular 流程图组件，渲染流程图。"
      }
    ]
  },
  {
    "name": "Data Display",
    "language": "en",
    "children": [
      {
        "label": "Avatar",
        "path": "components/avatar/en",
        "zh": "",
        "cover": "https://gw.alipayobjects.com/zos/antfincdn/aBcnbw68hP/Avatar.svg",
        "tag": "",
        "description": "Angular Avatar Component, Used to represent users or things, supporting the display of images, icons, or characters."
      },
      {
        "label": "Badge",
        "path": "components/badge/en",
        "zh": "",
        "cover": "https://gw.alipayobjects.com/zos/antfincdn/6%26GF9WHwvY/Badge.svg",
        "tag": "",
        "description": "Angular Badge Component, Small numerical value or status descriptor for UI elements."
      },
      {
        "label": "Calendar",
        "path": "components/calendar/en",
        "zh": "",
        "cover": "https://gw.alipayobjects.com/zos/antfincdn/dPQmLq08DI/Calendar.svg",
        "tag": "",
        "description": "Angular Calendar Component, Container for displaying data in calendar form."
      },
      {
        "label": "Card",
        "path": "components/card/en",
        "zh": "",
        "cover": "https://gw.alipayobjects.com/zos/alicdn/keNB-R8Y9/Card.svg",
        "tag": "",
        "description": "Angular Card Component, Simple rectangular container."
      },
      {
        "label": "Carousel",
        "path": "components/carousel/en",
        "zh": "",
        "cover": "https://gw.alipayobjects.com/zos/antfincdn/%24C9tmj978R/Carousel.svg",
        "tag": "",
        "description": "Angular Carousel Component, A carousel component. Scales with its container."
      },
      {
        "label": "Collapse",
        "path": "components/collapse/en",
        "zh": "",
        "cover": "https://gw.alipayobjects.com/zos/alicdn/IxH16B9RD/Collapse.svg",
        "tag": "",
        "description": "Angular Collapse Component, A content area which can be collapsed and expanded."
      },
      {
        "label": "Comment",
        "path": "components/comment/en",
        "zh": "",
        "cover": "https://gw.alipayobjects.com/zos/alicdn/ILhxpGzBO/Comment.svg",
        "tag": "",
        "description": "Angular Comment Component, A comment displays user feedback and discussion to website content."
      },
      {
        "label": "Descriptions",
        "path": "components/descriptions/en",
        "zh": "",
        "cover": "https://gw.alipayobjects.com/zos/alicdn/MjtG9_FOI/Descriptions.svg",
        "tag": "",
        "description": "Angular Descriptions Component, Display multiple read-only fields in a group."
      },
      {
        "label": "Empty",
        "path": "components/empty/en",
        "zh": "",
        "cover": "https://gw.alipayobjects.com/zos/alicdn/MNbKfLBVb/Empty.svg",
        "tag": "",
        "description": "Angular Empty Component, Empty state placeholder."
      },
      {
        "label": "Image",
        "path": "components/image/en",
        "zh": "",
        "cover": "https://gw.alipayobjects.com/zos/antfincdn/D1dXz9PZqa/image.svg",
        "tag": "",
        "description": "Angular Image Component, Preview-able image."
      },
      {
        "label": "List",
        "path": "components/list/en",
        "zh": "",
        "cover": "https://gw.alipayobjects.com/zos/alicdn/5FrZKStG_/List.svg",
        "tag": "",
        "description": "Angular List Component, Basic list display, which can carry text, lists, pictures, paragraphs."
      },
      {
        "label": "Popover",
        "path": "components/popover/en",
        "zh": "",
        "cover": "https://gw.alipayobjects.com/zos/alicdn/1PNL1p_cO/Popover.svg",
        "tag": "",
        "description": "Angular Popover Component, The floating card popped by clicking or hovering."
      },
      {
        "label": "QRCode",
        "path": "components/qr-code/en",
        "zh": "",
        "cover": "https://mdn.alipayobjects.com/huamei_7uahnr/afts/img/A*cJopQrf0ncwAAAAAAAAAAAAADrJ8AQ/original",
        "tag": "15.1.0",
        "description": "Angular QRCode Component, Convert text into QR codes, and support custom color and logo."
      },
      {
        "label": "Segmented",
        "path": "components/segmented/en",
        "zh": "",
        "cover": "https://gw.alipayobjects.com/zos/bmw-prod/a3ff040f-24ba-43e0-92e9-c845df1612ad.svg",
        "tag": "",
        "description": "Angular Segmented Component, Display multiple options and allow users to select a single option."
      },
      {
        "label": "Statistic",
        "path": "components/statistic/en",
        "zh": "",
        "cover": "https://gw.alipayobjects.com/zos/antfincdn/rcBNhLBrKbE/Statistic.svg",
        "tag": "",
        "description": "Angular Statistic Component, Display statistic number."
      },
      {
        "label": "Table",
        "path": "components/table/en",
        "zh": "",
        "cover": "https://gw.alipayobjects.com/zos/alicdn/f-SbcX2Lx/Table.svg",
        "tag": "",
        "description": "Angular Table Component, A table displays rows of data."
      },
      {
        "label": "Tag",
        "path": "components/tag/en",
        "zh": "",
        "cover": "https://gw.alipayobjects.com/zos/alicdn/cH1BOLfxC/Tag.svg",
        "tag": "",
        "description": "Angular Tag Component, Used for marking and categorization."
      },
      {
        "label": "Timeline",
        "path": "components/timeline/en",
        "zh": "",
        "cover": "https://gw.alipayobjects.com/zos/antfincdn/vJmo00mmgR/Timeline.svg",
        "tag": "",
        "description": "Angular Timeline Component, Vertical display timeline."
      },
      {
        "label": "Tooltip",
        "path": "components/tooltip/en",
        "zh": "",
        "cover": "https://gw.alipayobjects.com/zos/alicdn/Vyyeu8jq2/Tooltp.svg",
        "tag": "",
        "description": "Angular Tooltip Component, Simple text popup box."
      },
      {
        "label": "Tree",
        "path": "components/tree/en",
        "zh": "",
        "cover": "https://gw.alipayobjects.com/zos/alicdn/Xh-oWqg9k/Tree.svg",
        "tag": "",
        "description": "Angular Tree Component, Multiple-level structure list."
      },
      {
        "label": "TreeView",
        "path": "components/tree-view/en",
        "zh": "",
        "cover": "https://gw.alipayobjects.com/zos/alicdn/Xh-oWqg9k/Tree.svg",
        "tag": "",
        "description": "Angular TreeView Component, Tree view component with better performance and customizability."
      }
    ],
    "experimentalChildren": [
      {
        "label": "Image",
        "path": "experimental/experimental-image/en",
        "zh": "",
        "experimental": true,
        "tag": "",
        "description": "Angular Image Component, Experimental image component."
      },
      {
        "label": "Graph",
        "path": "experimental/graph/en",
        "zh": "",
        "experimental": true,
        "tag": "",
        "description": "Angular Graph Component, Render graph."
      }
    ]
  },
  {
    "name": "反馈",
    "language": "zh",
    "children": [
      {
        "label": "Alert",
        "path": "components/alert/zh",
        "zh": "警告提示",
        "cover": "https://gw.alipayobjects.com/zos/alicdn/8emPa3fjl/Alert.svg",
        "tag": "",
        "description": "Angular 警告提示组件，警告提示，展现需要关注的信息。"
      },
      {
        "label": "Drawer",
        "path": "components/drawer/zh",
        "zh": "抽屉",
        "cover": "https://gw.alipayobjects.com/zos/alicdn/7z8NJQhFb/Drawer.svg",
        "tag": "",
        "description": "Angular 抽屉组件，屏幕边缘滑出的浮层面板。"
      },
      {
        "label": "Message",
        "path": "components/message/zh",
        "zh": "全局提示",
        "cover": "https://gw.alipayobjects.com/zos/alicdn/hAkKTIW0K/Message.svg",
        "tag": "",
        "description": "Angular 全局提示组件，全局展示操作反馈信息。"
      },
      {
        "label": "Modal",
        "path": "components/modal/zh",
        "zh": "对话框",
        "cover": "https://gw.alipayobjects.com/zos/alicdn/3StSdUlSH/Modal.svg",
        "tag": "",
        "description": "Angular 对话框组件，展示一个对话框，提供标题、内容区、操作区。"
      },
      {
        "label": "Notification",
        "path": "components/notification/zh",
        "zh": "通知提醒框",
        "cover": "https://gw.alipayobjects.com/zos/alicdn/Jxm5nw61w/Notification.svg",
        "tag": "",
        "description": "Angular 通知提醒框组件，全局展示通知提醒信息。"
      },
      {
        "label": "Popconfirm",
        "path": "components/popconfirm/zh",
        "zh": "气泡确认框",
        "cover": "https://gw.alipayobjects.com/zos/alicdn/fjMCD9xRq/Popconfirm.svg",
        "tag": "",
        "description": "Angular 气泡确认框组件，点击元素，弹出气泡式的确认框。"
      },
      {
        "label": "Progress",
        "path": "components/progress/zh",
        "zh": "进度条",
        "cover": "https://gw.alipayobjects.com/zos/alicdn/xqsDu4ZyR/Progress.svg",
        "tag": "",
        "description": "Angular 进度条组件，展示操作的当前进度。"
      },
      {
        "label": "Result",
        "path": "components/result/zh",
        "zh": "结果",
        "cover": "https://gw.alipayobjects.com/zos/alicdn/9nepwjaLa/Result.svg",
        "tag": "",
        "description": "Angular 结果组件，用于反馈一系列操作任务的处理结果。"
      },
      {
        "label": "Skeleton",
        "path": "components/skeleton/zh",
        "zh": "骨架屏",
        "cover": "https://gw.alipayobjects.com/zos/alicdn/KpcciCJgv/Skeleton.svg",
        "tag": "",
        "description": "Angular 骨架屏组件，在需要等待加载内容的位置提供一个占位图形组合。"
      },
      {
        "label": "Spin",
        "path": "components/spin/zh",
        "zh": "加载中",
        "cover": "https://gw.alipayobjects.com/zos/alicdn/LBcJqCPRv/Spin.svg",
        "tag": "",
        "description": "Angular 加载中组件，用于页面和区块的加载中状态。"
      }
    ],
    "experimentalChildren": []
  },
  {
    "name": "Feedback",
    "language": "en",
    "children": [
      {
        "label": "Alert",
        "path": "components/alert/en",
        "zh": "",
        "cover": "https://gw.alipayobjects.com/zos/alicdn/8emPa3fjl/Alert.svg",
        "tag": "",
        "description": "Angular Alert Component, Alert component for feedback."
      },
      {
        "label": "Drawer",
        "path": "components/drawer/en",
        "zh": "",
        "cover": "https://gw.alipayobjects.com/zos/alicdn/7z8NJQhFb/Drawer.svg",
        "tag": "",
        "description": "Angular Drawer Component, A panel that slides out from the edge of the screen."
      },
      {
        "label": "Message",
        "path": "components/message/en",
        "zh": "",
        "cover": "https://gw.alipayobjects.com/zos/alicdn/hAkKTIW0K/Message.svg",
        "tag": "",
        "description": "Angular Message Component, Display global messages as feedback in response to user operations."
      },
      {
        "label": "Modal",
        "path": "components/modal/en",
        "zh": "",
        "cover": "https://gw.alipayobjects.com/zos/alicdn/3StSdUlSH/Modal.svg",
        "tag": "",
        "description": "Angular Modal Component, Display a modal dialog box, providing a title, content area, and action buttons."
      },
      {
        "label": "Notification",
        "path": "components/notification/en",
        "zh": "",
        "cover": "https://gw.alipayobjects.com/zos/alicdn/Jxm5nw61w/Notification.svg",
        "tag": "",
        "description": "Angular Notification Component, Prompt notification message globally."
      },
      {
        "label": "Popconfirm",
        "path": "components/popconfirm/en",
        "zh": "",
        "cover": "https://gw.alipayobjects.com/zos/alicdn/fjMCD9xRq/Popconfirm.svg",
        "tag": "",
        "description": "Angular Popconfirm Component, Pop up a bubble confirmation box for an action."
      },
      {
        "label": "Progress",
        "path": "components/progress/en",
        "zh": "",
        "cover": "https://gw.alipayobjects.com/zos/alicdn/xqsDu4ZyR/Progress.svg",
        "tag": "",
        "description": "Angular Progress Component, Display the current progress of an operation."
      },
      {
        "label": "Result",
        "path": "components/result/en",
        "zh": "",
        "cover": "https://gw.alipayobjects.com/zos/alicdn/9nepwjaLa/Result.svg",
        "tag": "",
        "description": "Angular Result Component, Used to feed back the results of a series of operational tasks."
      },
      {
        "label": "Skeleton",
        "path": "components/skeleton/en",
        "zh": "",
        "cover": "https://gw.alipayobjects.com/zos/alicdn/KpcciCJgv/Skeleton.svg",
        "tag": "",
        "description": "Angular Skeleton Component, Provide a placeholder while you wait for content to load or visualize content that doesn't exist yet."
      },
      {
        "label": "Spin",
        "path": "components/spin/en",
        "zh": "",
        "cover": "https://gw.alipayobjects.com/zos/alicdn/LBcJqCPRv/Spin.svg",
        "tag": "",
        "description": "Angular Spin Component, Used for the loading status of a page or a block."
      }
    ],
    "experimentalChildren": []
  },
  {
    "name": "其他",
    "language": "zh",
    "children": [
      {
        "label": "Affix",
        "path": "components/affix/zh",
        "zh": "固钉",
        "cover": "https://gw.alipayobjects.com/zos/alicdn/tX6-md4H6/Affix.svg",
        "tag": "",
        "description": "Angular 固钉组件，将页面元素钉在可视范围。"
      },
      {
        "label": "Watermark",
        "path": "components/watermark/zh",
        "zh": "水印",
        "cover": "https://img.alicdn.com/imgextra/i2/O1CN01ozPPZp1wj9CwsVvDL_!!6000000006343-0-tps-1232-820.jpg",
        "tag": "15.1.0",
        "description": "Angular 水印组件，给页面的某个区域加上水印。"
      }
    ],
    "experimentalChildren": []
  },
  {
    "name": "Other",
    "language": "en",
    "children": [
      {
        "label": "Affix",
        "path": "components/affix/en",
        "zh": "",
        "cover": "https://gw.alipayobjects.com/zos/alicdn/tX6-md4H6/Affix.svg",
        "tag": "",
        "description": "Angular Affix Component, Make an element stick to viewport."
      },
      {
        "label": "Watermark",
        "path": "components/watermark/en",
        "zh": "",
        "cover": "https://img.alicdn.com/imgextra/i2/O1CN01ozPPZp1wj9CwsVvDL_!!6000000006343-0-tps-1232-820.jpg",
        "tag": "15.1.0",
        "description": "Angular Watermark Component, Add specific text or patterns to the page."
      }
    ],
    "experimentalChildren": []
  },
  {
    "name": "特色组件",
    "language": "zh",
    "children": [
      {
        "label": "CheckList",
        "path": "components/check-list/zh",
        "zh": "任务清单",
        "cover": "https://img.alicdn.com/imgextra/i2/O1CN01E9BUpE1TCyZry8ETC_!!6000000002347-2-tps-386-453.png",
        "tag": "19.1.0",
        "description": "Angular 任务清单组件，用于在项目中梳理任务流程。"
      },
      {
        "label": "HashCode",
        "path": "components/hash-code/zh",
        "zh": "哈希码",
        "cover": "https://img.alicdn.com/imgextra/i3/O1CN01jn3OGS1qq7Xkq6O6b_!!6000000005546-2-tps-1074-374.png",
        "tag": "17.0.0",
        "description": "Angular 哈希码组件，展示区块链数据的哈希值。"
      }
    ],
    "experimentalChildren": []
  },
  {
    "name": "Featured Components",
    "language": "en",
    "children": [
      {
        "label": "CheckList",
        "path": "components/check-list/en",
        "zh": "",
        "cover": "https://img.alicdn.com/imgextra/i2/O1CN01E9BUpE1TCyZry8ETC_!!6000000002347-2-tps-386-453.png",
        "tag": "19.1.0",
        "description": "Angular CheckList Component, Used to organize the flow of tasks in a project."
      },
      {
        "label": "HashCode",
        "path": "components/hash-code/en",
        "zh": "",
        "cover": "https://img.alicdn.com/imgextra/i3/O1CN01jn3OGS1qq7Xkq6O6b_!!6000000005546-2-tps-1074-374.png",
        "tag": "17.0.0",
        "description": "Angular HashCode Component, Display the hash value of blockchain data."
      }
    ],
    "experimentalChildren": []
  }
]
}

export const DEMO_ROUTES: Routes = [
  {'path': 'components/affix', 'loadChildren': () => import('./affix/routes')},
  {'path': 'components/alert', 'loadChildren': () => import('./alert/routes')},
  {'path': 'components/anchor', 'loadChildren': () => import('./anchor/routes')},
  {'path': 'components/auto-complete', 'loadChildren': () => import('./auto-complete/routes')},
  {'path': 'components/avatar', 'loadChildren': () => import('./avatar/routes')},
  {'path': 'components/badge', 'loadChildren': () => import('./badge/routes')},
  {'path': 'components/breadcrumb', 'loadChildren': () => import('./breadcrumb/routes')},
  {'path': 'components/button', 'loadChildren': () => import('./button/routes')},
  {'path': 'components/calendar', 'loadChildren': () => import('./calendar/routes')},
  {'path': 'components/card', 'loadChildren': () => import('./card/routes')},
  {'path': 'components/carousel', 'loadChildren': () => import('./carousel/routes')},
  {'path': 'components/cascader', 'loadChildren': () => import('./cascader/routes')},
  {'path': 'components/check-list', 'loadChildren': () => import('./check-list/routes')},
  {'path': 'components/checkbox', 'loadChildren': () => import('./checkbox/routes')},
  {'path': 'experimental/code-editor', 'loadChildren': () => import('./code-editor/routes')},
  {'path': 'components/collapse', 'loadChildren': () => import('./collapse/routes')},
  {'path': 'components/color-picker', 'loadChildren': () => import('./color-picker/routes')},
  {'path': 'components/comment', 'loadChildren': () => import('./comment/routes')},
  {'path': 'experimental/cron-expression', 'loadChildren': () => import('./cron-expression/routes')},
  {'path': 'components/date-picker', 'loadChildren': () => import('./date-picker/routes')},
  {'path': 'components/descriptions', 'loadChildren': () => import('./descriptions/routes')},
  {'path': 'components/divider', 'loadChildren': () => import('./divider/routes')},
  {'path': 'components/drawer', 'loadChildren': () => import('./drawer/routes')},
  {'path': 'components/dropdown', 'loadChildren': () => import('./dropdown/routes')},
  {'path': 'components/empty', 'loadChildren': () => import('./empty/routes')},
  {'path': 'experimental/experimental-image', 'loadChildren': () => import('./experimental-image/routes')},
  {'path': 'components/flex', 'loadChildren': () => import('./flex/routes')},
  {'path': 'components/float-button', 'loadChildren': () => import('./float-button/routes')},
  {'path': 'components/form', 'loadChildren': () => import('./form/routes')},
  {'path': 'experimental/graph', 'loadChildren': () => import('./graph/routes')},
  {'path': 'components/grid', 'loadChildren': () => import('./grid/routes')},
  {'path': 'components/hash-code', 'loadChildren': () => import('./hash-code/routes')},
  {'path': 'components/icon', 'loadChildren': () => import('./icon/routes')},
  {'path': 'components/image', 'loadChildren': () => import('./image/routes')},
  {'path': 'components/input', 'loadChildren': () => import('./input/routes')},
  {'path': 'components/input-number', 'loadChildren': () => import('./input-number/routes')},
  {'path': 'components/layout', 'loadChildren': () => import('./layout/routes')},
  {'path': 'components/list', 'loadChildren': () => import('./list/routes')},
  {'path': 'components/mention', 'loadChildren': () => import('./mention/routes')},
  {'path': 'components/menu', 'loadChildren': () => import('./menu/routes')},
  {'path': 'components/message', 'loadChildren': () => import('./message/routes')},
  {'path': 'components/modal', 'loadChildren': () => import('./modal/routes')},
  {'path': 'components/notification', 'loadChildren': () => import('./notification/routes')},
  {'path': 'components/page-header', 'loadChildren': () => import('./page-header/routes')},
  {'path': 'components/pagination', 'loadChildren': () => import('./pagination/routes')},
  {'path': 'experimental/pipes', 'loadChildren': () => import('./pipes/routes')},
  {'path': 'components/popconfirm', 'loadChildren': () => import('./popconfirm/routes')},
  {'path': 'components/popover', 'loadChildren': () => import('./popover/routes')},
  {'path': 'components/progress', 'loadChildren': () => import('./progress/routes')},
  {'path': 'components/qr-code', 'loadChildren': () => import('./qr-code/routes')},
  {'path': 'components/radio', 'loadChildren': () => import('./radio/routes')},
  {'path': 'components/rate', 'loadChildren': () => import('./rate/routes')},
  {'path': 'experimental/resizable', 'loadChildren': () => import('./resizable/routes')},
  {'path': 'components/result', 'loadChildren': () => import('./result/routes')},
  {'path': 'components/segmented', 'loadChildren': () => import('./segmented/routes')},
  {'path': 'components/select', 'loadChildren': () => import('./select/routes')},
  {'path': 'components/skeleton', 'loadChildren': () => import('./skeleton/routes')},
  {'path': 'components/slider', 'loadChildren': () => import('./slider/routes')},
  {'path': 'components/space', 'loadChildren': () => import('./space/routes')},
  {'path': 'components/spin', 'loadChildren': () => import('./spin/routes')},
  {'path': 'components/splitter', 'loadChildren': () => import('./splitter/routes')},
  {'path': 'components/statistic', 'loadChildren': () => import('./statistic/routes')},
  {'path': 'components/steps', 'loadChildren': () => import('./steps/routes')},
  {'path': 'components/switch', 'loadChildren': () => import('./switch/routes')},
  {'path': 'components/table', 'loadChildren': () => import('./table/routes')},
  {'path': 'components/tabs', 'loadChildren': () => import('./tabs/routes')},
  {'path': 'components/tag', 'loadChildren': () => import('./tag/routes')},
  {'path': 'components/time-picker', 'loadChildren': () => import('./time-picker/routes')},
  {'path': 'components/timeline', 'loadChildren': () => import('./timeline/routes')},
  {'path': 'components/tooltip', 'loadChildren': () => import('./tooltip/routes')},
  {'path': 'components/transfer', 'loadChildren': () => import('./transfer/routes')},
  {'path': 'components/tree', 'loadChildren': () => import('./tree/routes')},
  {'path': 'components/tree-select', 'loadChildren': () => import('./tree-select/routes')},
  {'path': 'components/tree-view', 'loadChildren': () => import('./tree-view/routes')},
  {'path': 'components/typography', 'loadChildren': () => import('./typography/routes')},
  {'path': 'components/upload', 'loadChildren': () => import('./upload/routes')},
  {'path': 'components/watermark', 'loadChildren': () => import('./watermark/routes')},

];
