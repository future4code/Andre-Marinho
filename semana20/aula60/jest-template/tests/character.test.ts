import { validateCharacter } from "../src/character"

describe("Unitary tests", ()=> {

    test("Should return false for empty name", ()=> {
        const result = validateCharacter({
            name:"",
            life: 1500,
            strength: 500,
            defense: 800,
        })

        expect(result).toBe(false)
    })

    test("Should return false for a life equal to zero", ()=> {
        const result = validateCharacter({
            name: "Dedé",
            life: 0,
            strength: 1000,
            defense: 1000
        })

        expect(result).toBe(false)
    })

    test("Should return false for a strength equal to zero", () => {
        const result = validateCharacter({
            name: "Dedé",
            life: 1500,
            strength: 0,
            defense: 1000
        })

        expect(result).toBe(false)
    })

    test("Should return false for a defense equal to zero", () => {
        const result = validateCharacter({
            name: "Dedé",
            life: 1500,
            strength: 1000,
            defense: 0
        })

        expect(result).toBe(false)
    })

    test("Should return false for a strength, life or defense less than zero", () => {
        const result = validateCharacter({
            name: "Dedé",
            life: 1500,
            strength: -10,
            defense: 1000
        })

        expect(result).toBe(false)
    })

    test("Should return true for all the inputs", () => {
        const result = validateCharacter({
            name: "Dedé",
            life: 1500,
            strength: 1000,
            defense: 1000
        })

        expect(result).toBe(true)
    })

    test("Creating Mocks", () => {
        const validatorMock = jest.fn(() => {
                return true
            })
    })

    test("Creating Mocks", () => {
        const validatorMock = jest.fn(() => {
                return false
            });
    });
})