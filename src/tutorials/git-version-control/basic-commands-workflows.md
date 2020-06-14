---
title: "Basic commands & workflows"
order: 3
description: Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.
lang: en
image: /images/git.png
youtube: qDreU1-4CYo
---
Ok great so now we have a folder called my-first-project and initialized it with a Git repository. Let's start adding a basic text file to our Working Directory to learn how to work with it.

Create a new **my-first-file.txt** file inside the Working Directory. How is completely up to you! You can use the shell, an file manager, IDE or any other way possible.

## Getting the status of your Git project
Now switch to your shell, make sure you are still `cd`'d into the project's folder and type:

::: code
``` sh
git status
```
:::

This should give you some information about the Branch you are currently working in and if it's up to date with a possible remote Branch.

But most importantly for now, it should tell you about a new file called my-first-file.txt, which is currently untracked. This means that Git does not now this file and it does not exist in the last Snapshot.

## Adding a new file to Git
Let's now tell Git to add this file to be versioned and tracked for the future. Do this by typing:

::: code
``` sh
git add my-first-file.txt
```
:::

If you now run the `git status` command again, you shoud see that the file is now inside the [staging area](/tutorials/git-version-control/theory/#changing-files) and is therefore marked to be included inside your next commit.

"But why do I have to add a new file manually?" you may ask. Well imagine Git adding everything new to your repository by itself. Many programs and even file managers add files and directories automatically. You would need to check before every commit that all files inside the staging area are really what you want to commit. 

Git also allows you to add whole folders including subfolders by adding a directory `git add /some/directory/` and even add everything inside your Working Directory by typing: `git add .` (note the dot) for your convinience.

## Committing your first file to Git
You have told Git that you want to add one new file to the repository. We can now commit the added file by typing:

::: code
``` sh
git commit -m "My first commit"
```
:::

What this does is committing all files you've added previously to the staging area. The `-m` flag followed by a string is an easy way of providing a comment to this commit. If you omit the flag Git will open the standard shell editor which is most probably vim or emacs. 

::: note
Git forces you to provide a comment to your commit. Although it seems tideous now, this will become very usefull later on. Once you have worked on a project a bit longer or even with multiple people together, the comments will help you understand why something was changed. Think of it as a diary of your project and provide some useful context.
:::

## Restoring a file from Git
Congratulations! You've made your first commit and our new file is now tracked and version controlled by Git. So even if you change it's content or delete it completely, you are able to recover to the last commit very easy. Just make sure to commit regulary, so that the amount you loose in between commits is minimal.

Let's test this by deleting my-first-file.txt from your project. By using `git status` you can easily spot the deleted file. Type the following to restore it:

::: code
``` sh
git restore my-first-file.txt
```
:::

You will notice that it appeared again. This also works with partial changes. Open the file with an editor of your choice and type `Hello World!`. With `git restore my-first-file.txt` it will reset to be blank again, because this is the last commit you've made.

::: note
This only works as long as you've not added the change. If you've already added the change to the staging area, use `git rm <your file name>` to remove it from there. And if you've already committed your change, then have a look below.
:::

### Switching to a previous commit
But what about going back further in time? For this to test we first need some more commits to work with. Open our text file again and type `Hello World!`. Now add this change with `git add my-first-file.txt` and commit it with `git commit -m "Added a welcome message"`. Then repeat that one more time, but now replace the word "World" with your name. Make sure to commit the change with `git commit -m "Personalized the welcome message"`.

Once committed you can view a trace of commits by using the `git log` command. Here you can see the first commit hash, in my case this is `3251c4ed7dcff9cc0f2d833809419939bbed2c1b`. With the hash you are now able to go back to that specific commit.

Type `git checkout <your commit hash>` to view the contents of you Working Directory at the time of the commit.
To actually revert all changes (and commits) to a previous state, use the command `git reset --hard <your commit hash>`. 

<!-- Once committed you can view a trace of commits by using the `git log` command. To add a bit more visualisation I would recommend to add some parameters like `git log --all --graph --decorate`. -->