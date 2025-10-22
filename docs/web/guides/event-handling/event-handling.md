# Event Handling

Handle events and user interactions in forms.

## Overview

Listen to and respond to various form events.

## Available Events

### Form Load Event

```swift
joyfill.onFormLoad = { form in
    print("Form loaded: \(form.id)")
}
```

### Field Change Event

```swift
joyfill.onFieldChange = { field, value in
    print("Field \(field) changed to: \(value)")
}
```

### Form Submit Event

```swift
joyfill.onFormSubmit = { data in
    print("Form submitted with data: \(data)")
}
```

### Validation Event

```swift
joyfill.onValidation = { isValid, errors in
    if isValid {
        print("Validation passed")
    } else {
        print("Validation errors: \(errors)")
    }
}
```

## Custom Events

```swift
joyfill.addEventListener("customEvent") { payload in
    print("Custom event received: \(payload)")
}
```

## Examples

Coming soon...

