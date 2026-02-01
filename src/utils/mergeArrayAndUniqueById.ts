export default (oldList: Array<any>, newList: Array<any>) =>
  Array.from(new Map([...oldList, ...newList].map(i => [i.id, i])).values());
