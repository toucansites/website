---
type: page
views:
    html: docs.home
title: "Documentation"
description: "Access the complete user documentation for the Toucan Static Site Generator. Learn how to create and manage static websites efficiently."
---

# Documentation

Toucan is a static site generator written in Swift. Static site generators make websites less complex. This documentation aims to explain everything about Toucan and static sites in general.

A Static Site Generator (SSG) is a tool that creates static HTML pages from content written in plain text or other simple formats. It applies custom styles and templates during the HTML generation process. For example, Toucan uses Markdown for content and Mustache as its template engine.

Unlike traditional Content Management Systems (CMS) that generate pages dynamically on the server for each request, SSGs generate all the pages at build time. The static HTML can then be served by a simple file server, resulting in faster load times and better security.

You don’t have to worry about heavy traffic crashing your database. There’s no need to manage database servers or keep up with backups. You can use version control (Git, GitHub) to manage and track changes to your content. Since your site is static, you can skip web servers and load balancers. Instead, you can host your site on a content delivery network that easily handles changes in traffic.

Static sites are generally faster because they consist of pre-built HTML files, which reduces the need for server-side processing and database queries. Static sites are highly scalable and can handle high traffic volumes efficiently, especially when served through a content delivery network (CDN).This leads to faster speeds, better reliability, and an easier experience for developers.

After this brief introduction, let’s get started with Toucan. You can begin by following the [installation](/docs/installation/) guide to learn how to install Toucan, or you can jump straight into the [getting started](/docs/getting-started/) guide to create your very first Toucan-based website.
