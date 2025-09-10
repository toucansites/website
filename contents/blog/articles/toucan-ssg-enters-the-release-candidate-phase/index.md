---
type: post
title: "Toucan SGG enters the release candidate phase"
description: "After multiple alpha and beta releases, Toucan, the Swift-based static site generator, has entered its Release Candidate phase."
publication: "2025-09-11 00:00:00"
tags: 
    - releases
authors:
    - tibor-bodecs
featured: true
---

About a year ago, we introduced **Toucan**, a static site generator written in Swift, as an alpha release during the Server-Side Swift Conference. Since then, the project has grown and matured at a rapid pace. Today, we’re proud to announce a major milestone: Toucan is entering its **Release Candidate (RC) phase**.  

If you want to learn more about Toucan or revisit its first public debut, you can watch the full conference presentation here:  

<div class="video-container">
    <iframe width="560" height="315" src="https://www.youtube.com/embed/FuTpnddLhpU?si=NVb2XBfERJQTvmMm" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

The **alpha phase** lasted a little over a month and included three major releases. It gave developers their first chance to test Toucan in real projects and provided feedback that guided its early direction. At the end of October last year, we transitioned into the **beta phase**, which ran until September 2025. Over that period, we shipped six major beta releases, each one moving Toucan closer to production readiness.  

Throughout the alpha and beta cycles, Toucan was almost entirely rebuilt. We added a comprehensive test suite with more than 90% coverage, improved content validation, redesigned error reporting for clarity, and introduced proper installer and Docker support. On top of that, dozens of smaller refinements made the generator more stable and easier to use.  

A highlight of this work is the **custom build pipeline system with build targets**. This feature makes Toucan stand out from other static site generators, enabling it to produce multiple output formats—HTML, RSS, JSON, or any other format a developer needs. We also focused on localization and internationalization, unified naming conventions, restructured folder hierarchies, and streamlined the overall workflow. To make everyday development smoother, we added quality-of-life features such as built-in SASS support.  

To support the growing community, we published migration guides and expanded the documentation on the official website. While there’s still plenty of room to grow, our next goal in the RC stage is to raise the overall **developer experience (DX)** with better guides, clearer references, and more practical examples.  

We don’t expect to introduce breaking changes in the coming months. Aside from ongoing bug fixes and stability improvements, our main focus will be on polish. That said, the current RC already feels very close to what will become **Toucan 1.0**.  

This is also the perfect time for **frontend developers** to dive in. Bring over your existing templates or start fresh—Toucan supports your favorite tools like HTML, CSS, and JavaScript through the Mustache template system. Behind the scenes, Swift keeps everything running with speed, safety, and flexibility, giving you a modern static site generator that’s blazing fast.  

Looking ahead, we’ll continue refining existing templates, create new ones, and eventually roll out a dedicated template store. We’re also preparing major, non-breaking updates such as asynchronous file operations powered by the NIO file system, along with many other exciting features already waiting in the backlog. We can’t wait to share what’s next—until then, try out [Toucan RC1](https://github.com/toucansites/toucan) and see how far it has come.  