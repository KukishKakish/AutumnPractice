function accessObject(obj, property) {
  try {
    return obj[property];
  } catch (error) {
    if (error instanceof TypeError) {
      console.log('Ошибка TypeError:', error.message);
      return undefined;
    } else {
      throw error;
    }
  }
}

const obj1 = undefined;
console.log(accessObject(obj1, 'name'));
