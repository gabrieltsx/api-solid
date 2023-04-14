export class MaxDistanceError extends Error {
  constructor() {
    super(
      'The check-in can only be valuidated untill 20 minutes of its creation.',
    )
  }
}
