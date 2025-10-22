# Image Upload Handling

Handle image uploads in your forms.

## Overview

The Joyfill iOS SDK provides built-in support for image uploads with multiple configuration options.

## Configuration

```swift
let config = ImageUploadConfig(
    maxSize: 5 * 1024 * 1024, // 5MB
    allowedTypes: [.jpeg, .png],
    quality: 0.8
)
joyfill.configureImageUpload(config)
```

## Handling Uploads

```swift
joyfill.onImageUpload = { image, completion in
    // Upload to your server
    uploadImage(image) { url in
        completion(.success(url))
    }
}
```

## Examples

Coming soon...

