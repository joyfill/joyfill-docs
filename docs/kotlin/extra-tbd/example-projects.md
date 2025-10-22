# Example Projects

Explore complete example projects to get started quickly.

## Basic Form Example

A simple example demonstrating basic form functionality.

```swift
import UIKit
import Joyfill

class BasicFormViewController: UIViewController {
    let joyfill = Joyfill(apiKey: "your-api-key")
    
    override func viewDidLoad() {
        super.viewDidLoad()
        
        // Load form
        joyfill.loadForm(formId: "basic_form") { result in
            switch result {
            case .success(let form):
                self.displayForm(form)
            case .failure(let error):
                self.showError(error)
            }
        }
    }
    
    func displayForm(_ form: Form) {
        let formView = joyfill.createFormView(form)
        view.addSubview(formView)
    }
}
```

## Advanced Example

Coming soon...

## GitHub Repository

Find complete example projects on GitHub:

- [iOS Basic Example](https://github.com/joyfill/examples-ios-basic)
- [iOS Advanced Example](https://github.com/joyfill/examples-ios-advanced)
- [SwiftUI Integration](https://github.com/joyfill/examples-swiftui)

---

*More examples coming soon!*

