# Getting Started with iOS SDK

Get up and running with the Joyfill iOS SDK in minutes.

## Installation

### Swift Package Manager

Add the Joyfill SDK to your project using Swift Package Manager:

```swift
dependencies: [
    .package(url: "https://github.com/joyfill/joyfill-ios", from: "1.0.0")
]
```

### CocoaPods

Add to your `Podfile`:

```ruby
pod 'Joyfill', '~> 1.0'
```

## Quick Start

```swift
import Joyfill

// Initialize the SDK
let joyfill = Joyfill(apiKey: "your-api-key")

// Load a form
joyfill.loadForm(formId: "form_123") { result in
    switch result {
    case .success(let form):
        print("Form loaded: \(form)")
    case .failure(let error):
        print("Error: \(error)")
    }
}
```

## Next Steps

- [Understand Modes](../guides/modes/modes.md)
- [Handle Image Uploads](../guides/image-upload-handling/image-upload-handling.md)
- [Validate Fields](../guides/required-field-validation/required-field-validation.md)

