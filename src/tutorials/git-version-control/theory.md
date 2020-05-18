---
title: "A bit of Git theory"
order: 1
description: After this lesson you will know Git's history, what a Repository is and how Git handles file changes.
lang: en
image: /images/git.png
youtube: qDreU1-4CYo
---

*[VCS]: Version Control System

In this lesson you'll read about Git's history and some essential information how Git works. You don't need to understand everything here right now. Just keep in mind that this information is available. By reading further you should understand this section better. So come back to this lesson at any time of this tutorial for a nice "Aha" effect.

## History of Git
From 2002 on, Linux kernel developers moved away from passing around their changes as patches via email, to using a proprietary VCS called BitKeeper. This was fine until 2005 where the company developing BitKeeper removed it's free-of-charge status.

From then on Linus Torvalds (the maintainer of the Linux kernel) started developing Git. There where other VCS's but none of the available free systems met his needs. He was not happy about the performance, needing 30 seconds to apply a patch would not scale to the development of the Linux kernel.

Since then Git matured and started to change how developers worked together. Today there are many services and tools build around Git. For example as the base of a solid DevOps pipeline. And by learning Git you can profit from them too!

## How Git works
Git separates your projects into so called **Working Directories**. A Working Directory is a folder on your machine containing all project files and an hidden **.git** (note the dot) directory, which is called **Repository**. Inside, Git stores all project specific configuration, metadata and an object database with complete history of the Working Directory.

You will often encounter that developers and even official ressources use the word Repository as a synonym for Working Directory. But technically the Repository itself only refers to the .git folder.

### Distributed VCS
Like mentioned in the intro, Git is a distributed or decentralized VCS. This means everyone working on the project has a full, local copy of the Working Directory (including the Repository) on his machine. You are therefore independent from network or server issues and can even work completely offline which is a big benefit over centralized ones.

::: note
There are multiple ways of sharing your changes with others, which we will talk about in [lesson 6. Hosting & working in a team](http://localhost:8080/tutorials/git-version-control/hosting/). But for now let's focus on the basics.
:::

### Changing files
Git has three states for your files to be in:

- A file that has the **modified** state has changed or is new
- A file that has the **staged** state is marked to be included inside your next commit
- A file that has the **committed** state is known to Git with it's current content

So a typical Git workflow looks something like this:

1. You **modify** one or multiple files inside the Working Directory
2. You select / **stage**, which of these changed files should be included inside your next commit
3. You **commit**, which stores a new snapshot inside your Repository

#### Snapshots
A snapshot works by creating checksums for each file inside your Working Directory. Git then compares each checksum against it's previous one. If the checksum did not change, this file has not been changed. In which case Git stores the same checksum inside the new snapshot. If they do not match, the file's content did change. Where Git then stores the complete file with it's new checksum.

The fact that this is like a stream of snapshots, instead of storing only the deltas, is an important distinction between Git and other VCS.

Git uses SHA-1 hashing with 40 hexadecimal characters (0–9 and a–f), calculated based on the contents of a file.

It looks like that:

::: code
```
430ce34d020724ed75a196dfc2ad67c77772d169
```
:::

You will see those everywhere when working with Git. This is because Git internally uses them for reference. It also makes it impossible to change the content of any file or directory without Git knowing about it.

#### The only way is forward
Git makes loosing data hard. As soon as you've committed your changes, you should be able to recover from accidentally overwriting something very easily.

Even if you delete files from your Working Directory and commit those changes, Git will internally create a new snapshot without those files, instead of actually deleting them. This way you can always recover deleted or overwritten files.

That should be enough theory for now. Let's go on with with the fun part in the next lesson.