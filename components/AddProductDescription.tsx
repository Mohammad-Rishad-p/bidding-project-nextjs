// DynamicInputFields.tsx

import { useState } from 'react';

const AddProductDescription: React.FC = () => {
    const [pairs, setPairs] = useState([
        { id: 1, key: '', value: '' } // Initial pair of fields
    ]);

    const addFieldPair = () => {
        const newPairs = [
            ...pairs,
            { id: pairs.length + 1, key: '', value: '' } // Add a new pair
        ];
        setPairs(newPairs);
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>, id: number, keyOrValue: 'key' | 'value') => {
        const updatedPairs = pairs.map(pair => {
            if (pair.id === id) {
                return {
                    ...pair,
                    [keyOrValue]: e.target.value
                };
            }
            return pair;
        });
        setPairs(updatedPairs);
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const formData = pairs.reduce((acc, pair) => {
            if (pair.key && pair.value) {
                acc[pair.key] = pair.value;
            }
            return acc;
        }, {} as Record<string, string>);
        console.log(formData);
        // Handle form submission logic here (e.g., send formData to server)
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                {pairs.map(pair => (
                    <div key={pair.id} className="input-pair">
                        <input
                            type="text"
                            name="key"
                            placeholder="Key"
                            value={pair.key}
                            onChange={(e) => handleInputChange(e, pair.id, 'key')}
                        />
                        <input
                            type="text"
                            name="value"
                            placeholder="Value"
                            value={pair.value}
                            onChange={(e) => handleInputChange(e, pair.id, 'value')}
                        />
                    </div>
                ))}
                <button type="button" onClick={addFieldPair}>Add</button>
                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default AddProductDescription;
