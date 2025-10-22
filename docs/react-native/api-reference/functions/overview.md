# Functions

API reference for all available functions in the Joyfill iOS SDK.

## Core Functions

### initialize()

Initialize the Joyfill SDK with your API key.

```swift
func initialize(apiKey: String, config: Configuration? = nil)
```

### loadForm()

Load a form by ID.

```swift
func loadForm(formId: String, completion: @escaping (Result<Form, Error>) -> Void)
```

### submitForm()

Submit form data.

```swift
func submitForm(data: [String: Any], completion: @escaping (Result<Submission, Error>) -> Void)
```

## Validation Functions

### validateField()

Validate a specific field.

```swift
func validateField(name: String, value: Any) -> ValidationResult
```

### validateForm()

Validate the entire form.

```swift
func validateForm() -> ValidationResult
```

## Data Functions

### populateForm()

Populate form with data.

```swift
func populateForm(with data: [String: Any])
```

### extractData()

Extract current form data.

```swift
func extractData() -> [String: Any]
```

---

*More functions coming soon...*

