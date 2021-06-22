import { Character, performAttack, validateCharacter } from "../src/character"

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
            })
    })

    test("Should perform attack", () => {
        const validatorMock = jest.fn(() => {
            return true
        })

        const attacker: Character = {
            name: "Dedé",
            life: 1500,
            defense: 1200,
            strength: 1600
        }

        const defender: Character = {
            name: "Vicente",
            life: 1500,
            defense: 1400,
            strength: 1800,
        }

        performAttack(attacker, defender, validatorMock as any)

        expect(defender.life).toEqual(1300)
        expect(validatorMock).toHaveBeenCalled()
        expect(validatorMock).toHaveBeenCalledTimes(2)
        expect(validatorMock).toHaveReturnedTimes(2)
    })

    test("Should return a invalid character error", () => {
        expect.assertions(4)
        const validatorMock = jest.fn(()=> {
            return false
        })

        const attacker: Character = {
            name: "Dedé",
            life: 0,
            defense: 1200,
            strength: 1600,
        }

        const defender: Character = {
            name: "capeta",
            life: 1500,
            defense: 1400,
            strength: 1800,
        }

        try {
            performAttack(attacker, defender, validatorMock as any)
        } catch (error) {
            expect(error.message).toBe("Invalid character")
            expect(validatorMock).toHaveBeenCalled()
            expect(validatorMock).toHaveBeenCalledTimes(1)
            expect(validatorMock).toHaveReturnedTimes(1)
        }
    })
})