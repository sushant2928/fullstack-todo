const zod = require('zod')

const createTodo = zod.object({
    title: zod.string(),
    description: zod.string()
})

const updateTodo = zod.object({
    completed: zod.boolean().optional()
}).merge(createTodo.partial());

module.exports = {
    createTodo,
    updateTodo
}