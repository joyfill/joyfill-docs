# Classes

API reference for all classes in the Joyfill iOS SDK.

## Core Classes

### Joyfill

The main SDK class.

```swift
public class Joyfill {
    public init(apiKey: String, config: Configuration? = nil)
    
    // Methods
    public func loadForm(formId: String, completion: @escaping (Result<Form, Error>) -> Void)
    public func submitForm(data: [String: Any], completion: @escaping (Result<Submission, Error>) -> Void)
    public func validateForm() -> ValidationResult
}
```

### Form

Represents a form instance.

```swift
public class Form {
    public let id: String
    public let name: String
    public let fields: [Field]
    public var data: [String: Any]
}
```

### Field

Represents a form field.

```swift
public class Field {
    public let id: String
    public let name: String
    public let type: FieldType
    public let required: Bool
    public var value: Any?
}
```

### Configuration

SDK configuration options.

```swift
public class Configuration {
    public var environment: Environment
    public var debug: Bool
    public var customHeaders: [String: String]?
}
```

---

*More classes coming soon...*

