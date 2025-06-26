async function postFormDataAsJson({ url }) {

	const fetchOptions = {
		method: "GET",
		headers: {
			Accept: "application/json"
		}
	};

	const response = await fetch(url, fetchOptions);

	if (!response.ok) {
		const errorMessage = await response.text();
		throw new Error(errorMessage);
	}

	return response.json();
}

async function handleFormSubmit(event) {
    console.warn("handle form submission")
	event.preventDefault();

	const form = event.currentTarget;
	const url = form.action;

	try {
		const formData = new FormData(form);
        const search = formData.get("search").toLowerCase();
        
		const responseData = await postFormDataAsJson({ url });
        
        responseData
        .filter((obj) => 
            obj.title.toLowerCase().includes(search) || 
            obj.description.toLowerCase().includes(search)
        )
        .forEach(function(obj) { 
            console.log(obj.title); 
            console.log(obj.description); 
            console.log(obj.image); 
        });
	} 
    catch (error) {
		console.error(error);
	}
}

const exampleForm = document.getElementById("example-form");
exampleForm.addEventListener("submit", handleFormSubmit);
