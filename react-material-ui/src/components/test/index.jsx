import { Observable, interval, defer, of, Scheduler, fromEvent, from } from 'rxjs'
import { merge, map, take, pipe, bufferWhen, concatAll, takeUntil, defaultIfEmpty, distinct} from 'rxjs/operators'

const test = () => {
  const arr = new Array(10000000).fill(1)
  console.time('t')
  // from(arr)
  //   .pipe(distinct())
  //   .subscribe(x => console.log(x));
  console.log(new Set(arr))
  console.timeEnd('t')
  return 'vadym'
}
export default test