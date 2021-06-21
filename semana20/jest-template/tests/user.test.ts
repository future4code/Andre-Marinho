import { performPurchase, User } from "../src/user"

describe("Testing function", ()=> {

    test("Teste com o saldo maior do que o valor de compra", () => {
        const user: User = {
            name: "Andre",
            balance: 1000
        }

        const result = performPurchase(user, 100)

        expect(result).toEqual({
            name: "Andre",
            balance: 900
        })
    })

    test("Teste com o saldo igual ao valor de compra", () => {
        const user: User = {
            name: "Andre",
            balance: 1000
        }

        const result = performPurchase(user, 1000)

        expect(result).toEqual({
            name: "Andre",
            balance: 0
        })
    })

    test("Teste com o saldo menor ao valor de compra", () => {
        const user: User = {
            name: "Andre",
            balance: 500
        }

        const result = performPurchase(user, 1000)

        expect(result).not.toBeDefined()
    })

})