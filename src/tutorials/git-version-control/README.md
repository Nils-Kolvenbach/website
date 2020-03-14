---
title: "Version Control with Git"
description: In this tutorial we will learn to use and love one of the most influencial workflow tools, which is basically used by every developer I've met so far.
lang: en
image: /images/git.png
category: Basics
tags: [Git, Version Control System (VCS), Source-Control Management (SCM)]
---

*[VCS]: Version Control System
*[SCM]: Source-Control Management

## What is Git?
Git is a Version Control System (VCS) or Source-Control Management (SCM) software, that makes it possible to jump back to any previous version of a file.

Let's say you are a designer, creating beautifull posterart or a developer writing code over the period of days, months and maybe even years. Then you most probably mess up at some time in the process. Wouldn't it be nice to have the ability to jump back in time and revert specific changes you've made?

Also think about working together with multiple people around the world. How do you manage your work without accidentally overwriting someone elses, while working on the same files? Git and VCS in general is a solution to those problems. It helps you and the team you are working with 


and helps developers to keep track of the big WH questions like:
- What changed?
- When did it change?
- Who changed it?
- Why did it change?

## A bit of Git theory

### History
In 2005 Linus Torvalds created Git for development of the Linux kernel. There where VCS's before Git and they've actually used one called BitKeeper. But the copyright holder Larry McVoy had withdrawn free use of the product.

Linus wanted to use a VCS like BitKeeper, but none of the available free systems met his needs. He was not happy about the performance, needing 30 seconds to apply a patch would not scale to the development of the Linux kernel. Other 