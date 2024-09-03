Run  ```npx playwright test``` to run tests.

Auto IT script.
```
; Wait for the "New Incognito Tab - Google Chrome" window to be active
WinWaitActive("about:blank - Chromium")

; Activate the window to ensure it is in focus
WinActivate("about:blank - Chromium")

; Send a TAB keypress to move the focus to the "OK" button, followed by an Enter keypress to click it
Send("{TAB}{TAB}{ENTER}")
```

<video width="640" height="360" controls>
  <source src="https://drive.google.com/uc?export=download&id=1omzAmfxh1Nd4oCD-cTTOFSVsJUGGernc" type="video/mp4">
  Your browser does not support the video tag.
</video>
