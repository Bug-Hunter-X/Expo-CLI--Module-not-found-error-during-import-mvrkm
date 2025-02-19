This error occurs when you try to import a module that doesn't exist or is not properly installed in your Expo project.  This often happens when you have a typo in the import statement, or when the module isn't listed in your project's dependencies. For example:

```javascript
import { NonExistentComponent } from './components';
```

This would throw a runtime error because `NonExistentComponent` is not defined.  Another common cause is forgetting to install a package using `expo install <package-name>`. 