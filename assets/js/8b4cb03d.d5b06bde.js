(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{84:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return a})),n.d(t,"metadata",(function(){return s})),n.d(t,"toc",(function(){return i})),n.d(t,"default",(function(){return c}));var r=n(3),o=(n(0),n(94));const a={sidebar_position:2},s={unversionedId:"schema/type-generation",id:"schema/type-generation",isDocsHomePage:!1,title:"Type Generation",description:"Using the type generator feature you'll be able to automatically create structs for all of your types defined in the schema.",source:"@site/docs/schema/type-generation.md",sourceDirName:"schema",slug:"/schema/type-generation",permalink:"/dqlx/docs/schema/type-generation",editUrl:"https://github.com/fenos/dqlx-docs/edit/master/docs/schema/type-generation.md",version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Management",permalink:"/dqlx/docs/schema/create-schema"},next:{title:"Security",permalink:"/dqlx/docs/security"}},i=[{value:"Generating Types",id:"generating-types",children:[]}],p={toc:i};function c({components:e,...t}){return Object(o.b)("wrapper",Object(r.a)({},p,t,{components:e,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Using the type generator feature you'll be able to automatically create structs for all of your types defined in the schema."),Object(o.b)("h2",{id:"generating-types"},"Generating Types"),Object(o.b)("p",null,"At this stage the generator ",Object(o.b)("strong",{parentName:"p"},"is not")," a fully fledged cli command, hence you'll need to invoke it in your own space."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-go"},'schema := dql.NewSchema()\n\nschema.Type("User", func(user *dql.TypeBuilder) {\n    user.String("name")\n    user.String("surname")\n    user.DateTime("birthday")\n    user.Password("password")\n})\n\nschema.Type("Tag", func(tag *dql.TypeBuilder) {\n    tag.String("name")\n    tag.Type("posts", "Post").Reverse()\n})\n\nschema.Type("Post", func(post *dql.TypeBuilder) {\n    post.String("title").Lang()\n    post.String("content")\n    post.Bool("published")\n    post.DateTime("created_at")\n    post.Type("tags", "Tag").Reverse().List()\n    post.Int("views")\n})\n\nerr := dql.GenerateTypes(schema, dql.GeneratorOption{\n    Path:        "your_path/models/models.go",\n    PackageName: "models",\n})\n')),Object(o.b)("p",null,"It will generate"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-go"},'// Code auto-generated by dqlx DO NOT EDIT!!\n\npackage models\n\nimport (\n    "time"\n)\n\nvar UserFields = []string{"uid", "User.name", "User.surname", "User.birthday", "User.password", "dgraph.type"}\n\nvar UserType = "User"\n\ntype User struct {\n    Uid      string    `json:"uid,omitempty"`\n    Name     string    `json:"User.name,omitempty"`\n    Surname  string    `json:"User.surname,omitempty"`\n    Birthday time.Time `json:"User.birthday,omitempty"`\n    Password string    `json:"User.password,omitempty"`\n    DType    []string  `json:"dgraph.type,omitempty"`\n}\n\nvar TagFields = []string{"uid", "Tag.name", "dgraph.type"}\nvar TagToPostsEdge = "Tag.posts"\n\nvar TagType = "Tag"\n\ntype Tag struct {\n    Uid   string   `json:"uid,omitempty"`\n    Name  string   `json:"Tag.name,omitempty"`\n    Posts Post     `json:"Tag.posts,omitempty"`\n    DType []string `json:"dgraph.type,omitempty"`\n}\n\nvar PostFields = []string{"uid", "Post.title", "Post.content", "Post.published", "Post.created_at", "Post.views", "dgraph.type"}\nvar PostToTagsEdge = "Post.tags"\n\nvar PostType = "Post"\n\ntype Post struct {\n    Uid       string    `json:"uid,omitempty"`\n    Title     string    `json:"Post.title,omitempty"`\n    Content   string    `json:"Post.content,omitempty"`\n    Published bool      `json:"Post.published,omitempty"`\n    CreatedAt time.Time `json:"Post.created_at,omitempty"`\n    Tags      []Tag     `json:"Post.tags,omitempty"`\n    Views     int64     `json:"Post.views,omitempty"`\n    DType     []string  `json:"dgraph.type,omitempty"`\n}\n')))}c.isMDXComponent=!0},94:function(e,t,n){"use strict";n.d(t,"a",(function(){return l})),n.d(t,"b",(function(){return y}));var r=n(0),o=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=o.a.createContext({}),m=function(e){var t=o.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},l=function(e){var t=m(e.components);return o.a.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},d=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,s=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),l=m(n),d=r,y=l["".concat(s,".").concat(d)]||l[d]||u[d]||a;return n?o.a.createElement(y,i(i({ref:t},c),{},{components:n})):o.a.createElement(y,i({ref:t},c))}));function y(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,s=new Array(a);s[0]=d;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:r,s[1]=i;for(var c=2;c<a;c++)s[c]=n[c];return o.a.createElement.apply(null,s)}return o.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);