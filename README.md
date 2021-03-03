| Enviromment   | Status   |
| ------------- | -------- | 
| Dev           | [![Netlify Status](https://api.netlify.com/api/v1/badges/15721b89-622e-4b4a-8fc5-6433b71d7992/deploy-status)](https://app.netlify.com/sites/heirloomfarm-dev/deploys)     | 
| Prod          | [![Netlify Status](https://api.netlify.com/api/v1/badges/aa9c2904-d115-4d9c-9ca1-f426d5697811/deploy-status)](https://app.netlify.com/sites/heirloomfarm/deploys)   |



<h1 align="center">
  Heirloom Farm 👨🏻‍🌾
</h1>

For content creation we are using **Markdown** files with Frontmatter attributes that can be easily edited or created.

# Table of Contents

- [Quick Start](#quick-start)
- [Features](#features)
- [Customize](#customize)
  - [Gatsby Configuration](#gatsby-configuration)
  - [Change the Theme](#change-the-theme)
  - [Icons](#icons)
    - [Navigation](#navigation)
    - [Social](#social)
- [Content Creation](#content-creation)
  - [Creating Blog Posts](#creating-blog-posts)
    - [Frontmatter for blog posts](#frontmatter-for-blog-posts)
  - [Creating AllThatWeGrow](#creating-projects)
    - [Frontmatter for projects](#frontmatter-for-projects)

# Quick start

1.  **Create a Gatsby site.**

    Use the Gatsby CLI to create a new site, specifying the _level-2_ starter.

    ```shell
    # create a new Gatsby site using the level-2 starter
    gatsby new my-portfolio https://github.com/Knochenmark/gatsby-starter-level-2
    ```

1.  **Start developing.**

    Navigate into your new site’s directory and start it up.

    ```shell
    cd my-portfolio/
    gatsby develop
    ```

1.  **Open the source code and start editing!**

    Your site is now running at `http://localhost:8000`!

    _Note: You'll also see a second link: _`http://localhost:8000/___graphql`_. This is a tool you can use to experiment with querying your data. Learn more about using this tool in the [Gatsby tutorial](https://www.gatsbyjs.org/tutorial/part-five/#introducing-graphiql)._

    Open the `my-portfolio` directory in your code editor of choice and edit `src/pages/index.js`. Save your changes and the browser will update in real time!

# Features

- Responsive Layout
- High configurability
- Configurable Sections via Markdown
  - Hero
  - About
  - Featured AllThatWeGrow
  - Contact
- Social Links
- Styled Components with Emotion
- Organized AllThatWeGrow by techs and Blog Posts by tags
- Posts in Markdown
  - Syntax highlighting in code blocks
- Pagination support
- More to come!

# Customize

## Gatsby Configuration

To make it easy for you we made sure you can configure as much as possible with the `gatsby-config.js` already.
All you have to do is change the relevant values. For reference you can find an overview of the config below:

```js
siteMetadata: {
  title: 'Level 2',
  titleTemplate: '%s · Level 2',
  image: '/images/logo.png',
  author: 'Max Mustermann',
  description: 'Gatsby starter to quickly setup your portfolio and boost it to the next level.',
  url: 'https://knochenmark.github.io',
  paginationPageSize: 4, // Amount of posts displayed per listing page.
},
```

## Icons

Under `src/components/_config` you will find further files that allow for configuration of _social_ and _navigation_ icons.

### Navigation

To change or add further menu links you can adjust the maps in `src/components/_config/menu-links.js`. If you want to change the icons that are being used you just have to change the `icon` property to another solid icon from font-awesome. Please refer to [Font Awsome Solid Icons](https://fontawesome.com/icons?d=gallery&s=solid&m=free) for available icons.

### Social

In `src/components/_config/social-icon-list.js` you are able to add further social links or edit the link property to point to your social profiles. Those social links are currently displayed in the _header_ and _footer_. Feel free to reuse them where ever
you like.

## Change the Theme

In order to change the colors of the theme you can just change the values of the css variables in the `src/styles/variables.styl` file. Every color in the _CSS_ is based on those css variables. This allows you to quickly apply a different theme of your choice.

```styl
body
  // Colors
  --bg-color #252839
  --bg-content-color #1b1d2a
  --title-color #fff
  --body-color #ced8de
  --primary-color #F1B631
  --secondary-color #f18731
  // Dimensions & Form
  --radius 6px
  --space 3.5rem
  --header-height 80px
  --content-width 860px
  // Transition Times
  --transition-fast 0.2s
  --transition-normal 0.4s
  --transition-slow 0.6s
  // Misc
  --bg-code rgba(0, 0, 0, 0.3)
  --border-color rgba(255, 255, 255, 0.1)
```

# Content Creation

All content files and the information for the sections on the index page can be found in the `content` folder.

The folder contains subfolders for:

- blog posts
- projects
- sections

## Creating Blog Posts

In order to create a blog post you just have to add a markdown file under `content/posts` and move images that are used in your blog post into `content/posts/images`.

### Frontmatter for blog posts

The frontmatter information for each blog post is structured as following:

| Field         | Type     | Description             | Example               |
| ------------- | -------- | ----------------------- | --------------------- |
| date          | Date     | Publishing Date         | 2020-05-31            |
| title         | String   | Post Title              | 'Some title'          |
| tags          | String[] | List of Tags            | ['foo', 'bar']        |
| published     | Boolean  | Is Published Flag       | true                  |
| cover_image   | String   | Path of the Cover Image | ./images/my-image.jpg |
| canonical_url | Boolean  | is Canonical Link Flag  | false                 |
| description   | String   | Post short description  | 'Some Description'    |

---

Followed by the actual Blog content written in Markdown.

## Creating AllThatWeGrow Products

In order to create a project you create a markdown file under `content/projects` and move images that are used for your project into `content/projects/images`.

### Frontmatter for projects

The frontmatter information for each blog post is structured as following:

| Field       | Type     | Description             | Example                             |
| ----------- | -------- | ----------------------- | ----------------------------------- |
| date        | Date     | Publishing Date         | 2020-05-31                          |
| title       | String   | Project Title           | 'Gatsby Portfolio'                  |
| highlights  | String[] | List of Tags            | ['React', 'Gatsby']                 |
| featured    | Boolean  | Is Featured Flag        | true                                |
| cover_image | String?  | Path of the Cover Image | ./images/my-image.jpg               |
| repo_link   | String?  | URL to the repository   | 'https://github.com/facebook/react' |
| demo_link   | String?  | Post short description  | 'https://reactjs.org/'              |

---

Followed by the actual Project description in Markdown.

## Editing Section information

To be added
