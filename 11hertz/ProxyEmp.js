export class ProxyEmp {
  firstName;
  lastName;

  constructor() {
    return new Proxy(this, {
      get(target, prop) {
        if (prop === 'fullName') {
          return `${target.firstName} ${target.lastName}`;
        } else {
          return target[prop];
        }
      },

      set(target, prop, value) {
        // 이 부분을 작성하시오.
        const [firstName, lastName] = value.split(' ');
        if (prop === 'fullName') {
          if (lastName !== undefined) {
            target.firstName = firstName;
            target.lastName = lastName?.toUpperCase();
          } else {
            target.lastName = firstName;
          }
        }
        return target;
      },
    });
  }
}
