"use strict";(self.webpackChunktinasaurus_blog=self.webpackChunktinasaurus_blog||[]).push([[8757],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>h});var o=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=o.createContext({}),l=function(e){var t=o.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=l(e.components);return o.createElement(u.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},g=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,u=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=l(n),g=a,h=p["".concat(u,".").concat(g)]||p[g]||m[g]||r;return n?o.createElement(h,i(i({ref:t},c),{},{components:n})):o.createElement(h,i({ref:t},c))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,i=new Array(r);i[0]=g;var s={};for(var u in t)hasOwnProperty.call(t,u)&&(s[u]=t[u]);s.originalType=e,s[p]="string"==typeof e?e:a,i[1]=s;for(var l=2;l<r;l++)i[l]=n[l];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}g.displayName="MDXCreateElement"},8972:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>i,default:()=>p,frontMatter:()=>r,metadata:()=>s,toc:()=>l});var o=n(7462),a=(n(7294),n(3905));const r={title:"Hosting a blog with Tina CMS and Docusaurus",authors:[{name:"Markus Ahlstrand",image_url:"/img/markus.jpg"}],date:"2023-08-02",tags:["docusaurus","tinacms","cms","open source"]},i=void 0,s={permalink:"/blog/Hosting-a-blog-with-Tina-CMS-and-Docusaurus",editUrl:"https://tinasaurus.vercel.app/admin#/collections/post/blog/Hosting-a-blog-with-Tina-CMS-and-Docusaurus.mdx",source:"@site/blog/Hosting-a-blog-with-Tina-CMS-and-Docusaurus.mdx",title:"Hosting a blog with Tina CMS and Docusaurus",description:"The world of open-source software offers users an array of options for hosting and managing content, providing the much-needed autonomy over their digital presence. However, it often requires significant investment of time and might not deliver a result at par with ready-to-use commercial platforms. In this post, we will explore a combination of open-source tools that might help overcome this hurdle: Docusaurus, Tina CMS, and GitHub Pages.",date:"2023-08-02T00:00:00.000Z",formattedDate:"August 2, 2023",tags:[{label:"docusaurus",permalink:"/blog/tags/docusaurus"},{label:"tinacms",permalink:"/blog/tags/tinacms"},{label:"cms",permalink:"/blog/tags/cms"},{label:"open source",permalink:"/blog/tags/open-source"}],readingTime:3.63,hasTruncateMarker:!1,authors:[{name:"Markus Ahlstrand",image_url:"/img/markus.jpg",imageURL:"/img/markus.jpg"}],frontMatter:{title:"Hosting a blog with Tina CMS and Docusaurus",authors:[{name:"Markus Ahlstrand",image_url:"/img/markus.jpg",imageURL:"/img/markus.jpg"}],date:"2023-08-02",tags:["docusaurus","tinacms","cms","open source"]}},u={authorsImageUrls:[void 0]},l=[],c={toc:l};function p(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,o.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"The world of open-source software offers users an array of options for hosting and managing content, providing the much-needed autonomy over their digital presence. However, it often requires significant investment of time and might not deliver a result at par with ready-to-use commercial platforms. In this post, we will explore a combination of open-source tools that might help overcome this hurdle: Docusaurus, Tina CMS, and GitHub Pages."),(0,a.kt)("p",null,"Docusaurus is a remarkable solution for static content generation. Originating as a tool primarily for documentation websites, Docusaurus has proven to be a versatile tool for blogging as well. Its large ecosystem supports various plugins, making it an adaptable option for different requirements. The main challenge with Docusaurus lies in its content management workflow. It necessitates adding content as markdown files and committing them to git. While this approach ensures version control, it can be cumbersome when you need to make a quick post."),(0,a.kt)("p",null,"To tackle this, we bring in our second tool: Tina CMS. Tina is a user-friendly markdown editor that can be integrated with various Content Management Systems (CMS). Its primary function is to streamline the process of editing and updating content by directly committing the changes to git. By eliminating the need to manually update markdown files and commit them to git, Tina CMS enhances the overall user experience and content management workflow."),(0,a.kt)("p",null,"Lastly, we have GitHub Pages, a simple and effective solution for web hosting directly from a GitHub repository. Its simplicity makes it an ideal choice for those who manage their source code on GitHub. Furthermore, GitHub Pages also supports GitHub Actions, a CI/CD infrastructure that can automate the static generation of the website. This automation significantly reduces manual effort, making it a time-efficient solution."),(0,a.kt)("p",null,"In combination, Docusaurus, Tina CMS, and GitHub Pages present a strong case for a comprehensive, open-source, blogging solution. Docusaurus offers an efficient platform for static content generation, Tina CMS simplifies content updates, and GitHub Pages provide a hassle-free hosting solution. Each tool addresses different aspects of the blogging process, together offering a workflow that aligns with the benefits of commercial platforms while maintaining the flexibility of open-source software."),(0,a.kt)("p",null,"For users navigating the open-source landscape, this triad can potentially be the answer to their blogging needs. Exploring and integrating these tools could pave the way to a more streamlined, autonomous, and effective blogging process."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"How to set it up")),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Fork the repo from ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/tinacms/tinasaurus"},"https://github.com/tinacms/tinasaurus")," to your own github account. This way you can always pull down any improvements that they do to the repo later on.")),(0,a.kt)("p",null,"2","."," Start the project locally by running ",(0,a.kt)("inlineCode",{parentName:"p"},"yarn tina")," in a terminal and open ",(0,a.kt)("a",{parentName:"p",href:"http://localhost:3000/admin"},"http://localhost:3000/admin")," in a browser."),(0,a.kt)("p",null,"3","."," Configure your docusaurus.config.js to deploy to GitHub Pages. Modify the fields url, baseUrl, and organizationName and projectName under presets.docusaurus-plugin-content-docs as per your project."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"module.exports = {\n  url: 'https://<GITHUB_USERNAME>.github.io',\n  baseUrl: '/<REPO_NAME>/',\n  projectName: '<REPO_NAME>',\n  organizationName: '<GITHUB_USERNAME>',\n  // ...\n  presets: [\n    [\n      '@docusaurus/preset-classic',\n      {\n        docs: {\n          sidebarPath: require.resolve('./sidebars.js'),\n          routeBasePath: '/',\n          editUrl:\n            'https://github.com/<GITHUB_USERNAME>/<REPO_NAME>/edit/main/',\n        },\n        theme: {\n          customCss: require.resolve('./src/css/custom.css'),\n        },\n      },\n    ],\n  ],\n};\n\n")),(0,a.kt)("p",null,"4","."," Setup GitHub Actions. In your project root, create a new directory named .github/workflows and inside this, create a new file deploy.yml. This is the GitHub Actions configuration file."),(0,a.kt)("p",null,"Put the following content in the deploy.yml file:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},'name: Deployment\n\non:\n  push:\n    branches:\n      - main # Set a branch to deploy\n\njobs:\n  deploy:\n    runs-on: ubuntu-latest\n\n    steps:\n      - uses: actions/checkout@v3\n\n      - name: Setup Node\n        uses: actions/setup-node@v3\n        with:\n          node-version: "18"\n\n      - name: Install Dependencies\n        run: yarn\n\n      - name: Build\n        run: yarn build\n\n      - name: Deploy\n        uses: peaceiris/actions-gh-pages@v3\n        with:\n          github_token: ${{ secrets.GITHUB_TOKEN }}\n          publish_dir: ./build\n\n')),(0,a.kt)("p",null,"5","."," Grant Github Action Workflows read and write permissions to your repository. Otherwise it will fail to push the generated files to the ",(0,a.kt)("inlineCode",{parentName:"p"},"gh-pages")," branch."),(0,a.kt)("p",null,"5","."," Commit and Push.  Commit all your changes and push to the main branch."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},'git add.\ngit commit - m "Setup GitHub Actions for Docusaurus"\ngit push\n\n')),(0,a.kt)("p",null,"6","."," Activate GitHub Pages. Go to your repository settings on GitHub, scroll down to the GitHub Pages section, select gh-pages branch as your source, and save."),(0,a.kt)("p",null,'After you have pushed your changes to the repository, GitHub Actions should start a new job to deploy your Docusaurus site to GitHub Pages. You can check the status of the job in the "Actions" tab of your repository. After the deployment, you can access your site at https://\\<GITHUB',"_","USERNAME>.github.io/\\<REPO","_","NAME>/."))}p.isMDXComponent=!0}}]);