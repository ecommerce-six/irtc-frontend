export const deleteProperties = (obj: any, propertiesToDelete: string[]) => {
  for (const property of propertiesToDelete) {
    delete obj[property];
  }
};
