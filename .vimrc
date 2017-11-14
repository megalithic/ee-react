" checks to see if vim-test is installed (naive check.. find better way)
if exists('g:test#strategy')
  if expand('%:t') =~ '_spec.js'
    let test#javascript#jest#executable = 'yarn run cypress:run:one'
  else
    let test#javascript#jest#executable = 'yarn test'
  endif
endif
