---
layout: post
title: "Using GitHub Issues as Blog Comments"
description: "How I used github issues as blog comments"
tags: [blog-comments, github]
---

## Blog Comments?

A big question when it comes to static site genorators is blog comments. Many peoples go to comment plug-in is [Disqus](https://disqus.com). That is how I started out.

Enter [Utterances](https://utteranc.es) - A lightweight comments widget built on GitHub issues.

## Why you should use Utterances:

#### From [utteranc.es](https://utteranc.es):

Open source. 
No tracking, no ads, always free.
No lock-in. All data stored in GitHub issues. 
Styled with Primer, the css toolkit that powers GitHub. 
Dark theme. 
Lightweight. Vanilla TypeScript. No font downloads, JavaScript frameworks or polyfills for evergreen browsers.

## How it works

 When Utterances loads, the GitHub issue search API is used to find the issue associated with the page based on url, pathname or title. If we cannot find an issue that matches the page, no problem, utterances-bot will automatically create an issue the first time someone comments.
To comment, users must authorize the utterances app to post on their behalf using the GitHub OAuth flow. Alternatively, users can comment on the GitHub issue directly.

## Usage

Simply paste this code where you want your comments to appear. Then just let the magic happen!

```html
<script 
        src="https://utteranc.es/client.js"
        repo="[ENTER REPO HERE]"
        issue-term="pathname"
        theme="[YOUR THEME HERE]"
        crossorigin="anonymous"
        async>
</script>
```

Simple as that.