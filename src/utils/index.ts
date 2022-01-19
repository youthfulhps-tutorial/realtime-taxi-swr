import moment from 'moment';

export default class TimeUtils {
  static getReadableRelativeTimeFromNow(dateTime: string) {
    return moment(dateTime).fromNow();
  }
}
