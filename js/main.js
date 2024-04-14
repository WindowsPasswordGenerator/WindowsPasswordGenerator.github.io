const DIGITS = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
const UPPER_LETTERS = [
    'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M',
    'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z',
];
const LOWER_LETTERS = [
    'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm',
    'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z',
];
const SPECIAL_CHARACTERS = [
    '\'', '\\', '-', '!', '"', '#', '$', '%', '&', '(', ')', '*', ',',
    '.', '/', ':', ';', '?', '@', '[', ']', '^', '_', '`', '{', '|',
    '}', '~', '+', '<', '=', '>',
];

const READEABLE_AND_WRITABLE_DIGITS = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const READEABLE_AND_WRITABLE_UPPER_LETTERS = [
    'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'J', 'K', 'M',
    'N', 'P', 'R', 'S', 'T', 'W', 'X', 'Y', 'Z',
];
const READEABLE_AND_WRITABLE_LOWER_LETTERS = [
    'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'j', 'k', 'm',
    'n', 'p', 'r', 's', 't', 'w', 'x', 'y', 'z',
];
const READEABLE_AND_WRITABLE_SPECIAL_CHARACTERS = [
    '-', '#', '$', '@', '_',
];

function getRandKey(elements) {
	return Math.floor(Math.random() * elements.length);
}

function getRandElement(elements) {
	const random_key = getRandKey(elements);

	return elements[random_key];
}

function getRandHash(size, elements) {
	let hash = '';

	for (let i = 0; i < size; i++) {
		hash += getRandElement(elements);
	}

	return hash;
}

function getInputValue(input_id) {
    const element = document.getElementById(input_id);
    const size = parseInt(element.value);
    const max = parseInt(element.getAttribute('max'));

    if (size > max)
        return max;

    return size
}

function getComplexHash(size, element_map) {
    let temp_element_map = [...element_map];
    let hash = '';

    for (let i = 0; i < size; i++) {
        if (temp_element_map.length === 0) {
            temp_element_map = [...element_map];
        }

        const random_key = getRandKey(temp_element_map);
        hash += getRandElement(temp_element_map[random_key]);
        temp_element_map.splice(random_key, 1);
    }

    return hash;
}

function generateRandomPassword(size_input_id) {
	const size = getInputValue(size_input_id);
    const elements = [].concat(DIGITS, UPPER_LETTERS, LOWER_LETTERS,SPECIAL_CHARACTERS)

	alert(getRandHash(size, elements));
}

function generateComplexPassword(size_input_id) {
    const size = getInputValue(size_input_id);
    const element_map = [DIGITS, UPPER_LETTERS, LOWER_LETTERS, SPECIAL_CHARACTERS];
    
    alert(getComplexHash(size, element_map));
}

function generateReadableAndWritablePassword(size_input_id) {
    const size = getInputValue(size_input_id);
    const element_map = [
        READEABLE_AND_WRITABLE_DIGITS, 
        READEABLE_AND_WRITABLE_UPPER_LETTERS, 
        READEABLE_AND_WRITABLE_LOWER_LETTERS, 
        READEABLE_AND_WRITABLE_SPECIAL_CHARACTERS,
    ];
    
    alert(getComplexHash(size, element_map));
}
