const db = await Deno.openKv()

// const user = "huguichu"
// const result = await db.set(["username"], user)
// console.log(result)

// const username = await db.get(["username"])
// console.log(username)

// await db.set(["visits"], new Deno.KvU64(0n)) // 0n is a bigint

await db
    .atomic()
    .sum(["visits"], 1n)
    .commit()

const result = await db.get<Deno.KvU64>(["visits"])

console.log(result.value)



