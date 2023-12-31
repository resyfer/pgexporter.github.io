---
outline: deep
---

# Shell Completions

There is a minimal shell completion support for `pgexporter-cli` and `pgexporter-admin` for Bash and Zsh and can be taken advantage of.

## Installation for Bash

There is a completion script [`contrib/shell_comp/pgexporter_comp.bash`](https://github.com/pgexporter/pgexporter/blob/main/contrib/shell_comp/pgexporter_comp.bash) that can be used to help you complete the command line while you are typing.

It is required to source the script into your current shell, for instance by doing:

```sh
$ source contrib/shell_comp/pgexporter_comp.bash
```

:::tip NOTE
By doing it the above way, the effect is temporary and will go away once the shell is closed. Put a line in `.bashrc` sourcing the file to have shell completions even after opening a new shell.
:::

At this point, the completions should be active, so you can type the name of one the commands between `pgexporter-cli` and `pgexporter-admin` and hit `<TAB>` to help the command line completion.

## Installation for Zsh

In order to enable completion into `zsh` you first need to have `compinit` loaded; ensure your `.zshrc` file contains the following lines:

```sh
$ autoload -U compinit
$ compinit
```

and add the sourcing of the [`contrib/shell_comp/pgexporter_comp.zsh`](https://github.com/pgexporter/pgexporter/blob/main/contrib/shell_comp/pgexporter_comp.zsh) file into your `~/.zshrc` also associating the `_pgexporter_cli` and `_pgexporter_admin` functions to completion by means of `compdef`:

```sh
$ source contrib/shell_comp/pgexporter_comp.zsh
$ compdef _pgexporter_cli    pgexporter-cli
$ compdef _pgexporter_admin  pgexporter-admin
```

:::tip NOTE
By doing it the above way, the effect is temporary and will go away once the shell is closed. Put a line in `.zshrc` sourcing the file to have shell completions even after opening a new shell.
:::

If you want completions only for one command, e.g., `pgexporter-admin`, remove the `compdef` line that references the command you don't want to have automatic completion.

At this point, the completions should be active, so you can type the name of one the commands between `pgexporter-cli` and `pgexporter-admin` and hit `<TAB>` to help the command line completion.