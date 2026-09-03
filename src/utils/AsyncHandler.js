// const asyncHandler = () => {}
// const asyncHandler = (fn) => { (fn)=> {} }
// const asyncHandler = () => () => {}

const asyncHandler = (fn) => {
    (req, res, next) => {
        Promise.resolve( fn(req, res, next) )
        .catch((error) => next(error))
    }
}


export {asyncHandler}