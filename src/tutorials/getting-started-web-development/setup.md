---
title: "Setup"
order: 1
description: Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.
lang: en
image: https://via.placeholder.com/1200x514
youtube: qDreU1-4CYo
---
To begin with web development you do not need much to start with. Any Operating System (OS) as Windows, macOS or Linux will do, as long as you can work with text based files and are able to open those inside a Browser of your choice (although I would strongly suggest to use Chrome but more on that later).

Start by opening a console, navigating inside your development folder and typing or copying this inside:

::: code
``` sh{3}
mkdir test && cd test
git init
touch test.txt
cat test.txt
```
:::

This will start a new Git repository inside the folder you are currently in.

## Git
Git is a Version Control System or VCS. It makes it possible to jump back to any version of a file (hence the name) and helps developers to keep track of the big WH questions like:
- What changed?
- When did it change?
- Who changed it?
- Why did it change?

You will need to make yourself familiar working with it. Since almost all projects use some form of VCS and Git is the most used of all right now.

This is not without reason. Imagine yourself developing a simple website. Maybe you decide mid way you want to make a big layout change. How do you approach this problem? Do you just comment out all old code? Do you back it up inside a different folder? This may work for some time but what if it's the third, fourth, fifth time? This can become quite messy.

Development will also most probably take you more then one day to complete. Do you still know why you did this small change yesterday or a week later?

And now think of a bigger project with multiple developers working together over a longer period. Where do you keep your files? How do you organise changes without overwriting each others work?

Git and VCS in general is a solution of problems developers faced.




Start by creating a folder that will contain all files we are going to add. Inside this folder 