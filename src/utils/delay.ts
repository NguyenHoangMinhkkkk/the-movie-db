export default (time: number = 500, data: any = undefined): Promise<any> =>
  new Promise(resolve => setTimeout(() => resolve(data), time));
