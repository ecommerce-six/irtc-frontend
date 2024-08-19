export const editor = {
  addHeading: (element: any, heading: string) => {
    const lines = element.current.value.split("\n");

    const cursorPosition = element.current.selectionStart;

    if (cursorPosition) {
      for (let i = 0; i < lines.length; i++) {
        if (cursorPosition <= lines.slice(0, i + 1).join("\n").length) {
          const secondLinesEnter = i > 0 ? "\n" : "";

          const newLine = secondLinesEnter + heading + " " + lines[i] + "\n";

          const haveHeading = lines[i].replace(/\s/g, "").slice(0, heading.length) === heading;

          if (!haveHeading) {
            const newText = lines.slice(0, i).join("\n") + newLine + lines.slice(i + 1).join("\n");

            element.current.value = newText;
          }

          break;
        }
      }
    } else {
      if (lines[lines.length - 1] !== heading) {
        lines[lines.length - 1] = `${heading} `;

        const newText = lines.join("\n");

        element.current.value = newText;
      }
    }
  },
  boldHandler: (element: any, strWrapper: string) => {
    const startIndex = element.current?.selectionStart;

    const endIndex = element.current?.selectionEnd;

    if (element.current) {
      const value = element.current?.value;

      const newValue =
        value.substring(0, startIndex) +
        strWrapper +
        value.substring(startIndex, endIndex) +
        strWrapper +
        value.substring(endIndex);

      element.current.value = newValue;
    }
  },
  dividerHandler: (element: any) => {
    const lines = element.current.value.split("\n");

    const divider = "---";

    const cursorPosition = element.current.selectionStart;

    if (cursorPosition) {
      for (let i = 0; i < lines.length; i++) {
        if (cursorPosition <= lines.slice(0, i + 1).join("\n").length) {
          const secondLinesEnter = i > 0 ? "\n" : "";

          const newLine = secondLinesEnter + divider + " \n";

          const haveHeading = lines[i].replace(/\s/g, "").slice(0, divider.length) === divider;

          if (!haveHeading) {
            const newText = lines.slice(0, i).join("\n") + newLine + lines.slice(i).join("\n");

            element.current.value = newText;
          }

          break;
        }
      }
    } else {
      if (lines[lines.length - 1] !== ` ${divider}`) {
        lines[lines.length] = `${divider} `;

        const newText = lines.join("\n");

        element.current.value = newText;
      }
    }
  },
  linkHandler: (element: any) => {
    const startIndex = element.current?.selectionStart;

    const endIndex = element.current?.selectionEnd;

    if (element.current) {
      const value = element.current?.value;

      const newValue =
        value.substring(0, startIndex) +
        " [" +
        value.substring(startIndex, endIndex) +
        "](URL_LINK) " +
        value.substring(endIndex);

      element.current.value = newValue;
    }
  },
};
