export const estimateReadTimeHandler = (body: string) => {
  if (body) {
    // remove whitespace as well as space, tab, and enter
    const wordsCount = body.split(/\s+/).length;

    // average words that you can read in a minute
    const WORDSPERMINUTE = 50;

    // how many minute will this article will take in minute
    const time = wordsCount / WORDSPERMINUTE;

    switch (true) {
      case time < 1:
        return "کمتر از یک دقیقه";

      case time < 60:
        return `${Math.ceil(time)} دقیقه`;

      default:
        return "بیشتر از یک ساعت";
    }
  }
};
