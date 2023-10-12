import childRules from "./childRules"

console.error('childRules', childRules);

const app = []
childRules.forEach(item => {
    app.push({
        name: item.name,
        entry: item.entry,
        container: item.container,
        activeRule: item.activeRule
    })
})

export default app;
