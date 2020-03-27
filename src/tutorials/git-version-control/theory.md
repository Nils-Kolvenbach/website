---
title: "A bit of Git theory"
order: 1
description: Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.
lang: en
image: /images/git.png
youtube: qDreU1-4CYo
---

*[VCS]: Version Control System

## History of Git
In 2005 Linus Torvalds created Git for development of the Linux kernel. There where VCS's before Git and they've actually used one called BitKeeper. But the copyright holder Larry McVoy had withdrawn free use of the product.

Linus wanted to use a VCS like BitKeeper, but none of the available free systems met his needs. He was not happy about the performance, needing 30 seconds to apply a patch would not scale to the development of the Linux kernel. Other 

## How Git works
Git separates your projects into so called repositories. A repository is a folder on your machine containing all project files and an hidden `.git` (note the dot) directory. Inside, Git stores all project specific configuration, metadata and an object database with complete history of the repository.

### Distributed VCS
Like mentioned in the intro, Git is a distributed or decentralized VCS. This means everyone working on the project has a full, local copy of the repository on his machine. You are therefore independent from network or server issues and can even work completely offline which is a big benefit over centralized ones.

::: note
There are multiple ways of sharing your changes with others, which we will talk about in [lesson 6. Hosting & working in a team](http://localhost:8080/tutorials/git-version-control/hosting/). But for now let's focus on the basics.
:::

### Changing files
<!-- Git has three states for your files to be in:

- A file that has the `modified` state has changed or is new
- A file that has the `staged` state is marked to be included inside your next commit
- A file that has the `committed` state is known to Git with it's current content
 -->


Changes made are committed to your local repository. A `commit` is like a snapshot of your whole repository and represents it's state at this time. Files that have not been changed are included as a link to the last version of this file for efficiency. This is an important distinction between Git and other VCS.

Every time you make a commit, Git makes sure to generate a checksum for it.

::: note
Git uses SHA-1 hashing with 40 hexadecimal characters (0–9 and a–f), calculated based on the contents of a file.
:::

It looks like that:

::: code
```
430ce34d020724ed75a196dfc2ad67c77772d169
```
:::

You will see those everywhere when working with Git. This is because Git internally uses them for reference. It also makes it impossible to change the content of any file or directory without Git knowing about it.