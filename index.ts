function isPalindrome(s: string): boolean {
    const parsedString = s.replace(/[^0-9a-z]/gi,'').toLowerCase().split(''); 

    for(let i =0, j = parsedString.length - 1; i < j; i++, j--) {
        const leftLetter = parsedString[i]; 
        const rightLetter = parsedString[j];

        if(leftLetter !== rightLetter) {
            return false; 
        }
    }

    return true; 
};


console.log(isPalindrome('A man, a plan, a canal: Panama'))