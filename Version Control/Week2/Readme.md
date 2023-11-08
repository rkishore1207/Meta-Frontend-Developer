# Version Control
## Week 2
* Unix is the 1st software was developed after some years Linux was developed by Linus Torvalds.
* `Flags` can be used with conjuction of Unix commands and helps to **change the behaviour** of the command.
* **Helper commands** -> `man ls` -> giving the details of the ls command.
* `pwd` -> print working directory gives the current working directory
* `cp` -> copy the source file into the destination file.
* `mv` -> move the file from one directory to other and helps rename the file.
* `#!/bin/bash` -> notify that it is a bash script file.
* `/` -> root and `~` -> home
* `mv sourceFile destinationFile`;
* `mv file.txt dir2/dir3/` -> moving file to directory 3 which is in directory 2.
* `cd ../dir2` -> move to the back immediately go into the directory2.
* Pipes were used to give the output of one command to the input of other command.
### Redirection
* Every unix commands takes input as **command** and gave the respected outputs.
* For system, **stdin** is the *keyboard* and **stdout** is the *monitor*.
* Using redirection we can able to change the direction that is stdin to stdOut.
* Shell can make note of all activities that are happen in cli and store everything as digits as <u>stdin -> 0, stdout -> 1 and stderr -> 2</u>.
1. **STDIN:**
> - cat > input.txt -> then we can add texts through keyboard
> - cat < input.txt -> show the texts in the command prompt
2. **STDOUT:**
3. **STDERR:**
> - bin/usr 2> output.txt -> in the file there entered error message
* `Grep` -> Global Regular Expression Print.
* Grep is used to search certain things in the file and with the help of `-i` flag it would avoid the case sensitivities.
* and with `-w` Flag should return the exact match.