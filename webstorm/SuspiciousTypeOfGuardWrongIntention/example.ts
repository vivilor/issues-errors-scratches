class Animal {}

class Hippo extends Animal {}

class Bird {}

class Hawk extends Bird {}
abstract class AbstractZoo {
  get animals () {
    const animals = []

    for (const key of Object.keys(this)) {
      const propertyValue = this[key as keyof this]

      if (propertyValue instanceof Animal) {
        animals.push(propertyValue)
      }
    }

    return animals
  }
}
