---
title: "Installation and configuration"
order: 2
description: Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.
lang: en
image: /images/git.png
youtube: qDreU1-4CYo
---
There are many ways to use and work with Git. The most basic but also feature rich way of doing so is using the command line - which I would strongly advice of using.

Tools providing you with a graphical user interface like GitKraken, Sourcetree or GitHub Desktop vary in capabilities and implement only a partial subset of Git functionality.

## Install Git
The way you install Git depends on your Operating System. Visit [Git's downloads page](https://git-scm.com/downloads) and click on your OS's link to either download an executable (Windows & Mac OS X) or get instructions how to install it (Linux & Unix) via the package manager of your distribution.

Then test your installation of Git by opening a Terminal / Command Prompt / PowerShell and type `git --version`. You should see something like this:

::: asset
![Terminal with git --version output](/images/terminal-git-version.png)
:::

If you get an error message

## Configure Git locally
Git uses your name and email address to identify you and will bake this information into each and every commit. So you should start by telling Git this information right away. 

Type the following two commands one by one and replace the placeholder information with yours.

::: code
``` sh
git config --global user.name "John Doe"
git config --global user.email "johndoe@example.com"
```
:::

::: note
The `--global` flag will set the given information for everything you do on your system. If you only want to change the information for the project you are currently `cd`'d into, omit this flag.
:::

### Initialize a new Git project
Start by creating a folder that will contain all files we are going to add. Inside this folder 

You don't need to create an account for using Git itself on your machine right now. 
